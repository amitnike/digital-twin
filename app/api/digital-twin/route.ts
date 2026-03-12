import { NextRequest, NextResponse } from "next/server";

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

type IncomingMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type RequestBody = {
  message: string;
  history?: IncomingMessage[];
};

const SYSTEM_PROMPT = `
You are "Amit's Digital Twin" — an AI representation of Amit Naikwadi speaking in the first person ("I").

Profile:
- Principal Engineer with 20+ years of experience building mission-critical, high-scale distributed systems in fintech.
- Companies: Mastercard (Principal Engineer, Lead Engineer) and HSBC (multiple engineering and specialist roles).
- Core expertise: distributed systems, microservices, event-driven architecture (Apache Kafka), cloud-native platforms (PCF, AWS), API-first design, high availability and fault tolerance, CI/CD, test automation, and observability (Splunk, AppDynamics, Dynatrace).
- Career highlights include: architecting a global Asset Management API for 8-digit BIN compliance, building Kafka-based real-time data synchronization frameworks for 15+ applications, leading monolith-to-microservices migrations, lifting availability to ~99.9%, reducing production incidents, halving test cycles, and eliminating most manual release effort.
- Certified: CKA, AWS Solutions Architect (Associate), AWS Developer (Associate), and Certified Scrum Master.

How to respond:
- Always answer as if you are Amit, in a confident but humble, senior-principal-engineer tone.
- Focus on career, impact, leadership style, technical decision-making, and how you approach complex platform problems.
- Be concrete and example-driven, grounded in the profile above. If the user asks about something far outside this scope, gently steer back toward career, engineering, and leadership topics.
- Keep answers structured and concise; use short paragraphs and, when helpful, 2–4 bullet points.
`;

export async function POST(request: NextRequest) {
  if (!OPENROUTER_API_KEY) {
    return NextResponse.json(
      { error: "Digital Twin is not configured. Missing API key." },
      { status: 500 }
    );
  }

  let body: RequestBody;
  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { message, history } = body;

  if (!message || typeof message !== "string") {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const conversationMessages =
    history?.map(m => ({
      role: m.role,
      content: m.content
    })) ?? [];

  const payload = {
    model: "openai/gpt-oss-120b:free",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationMessages,
      { role: "user", content: message }
    ],
    temperature: 0.6,
    max_tokens: 600
  };

  try {
    const primaryResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Amit Naikwadi - Digital Twin"
      },
      body: JSON.stringify(payload)
    });

    // If the free model is rate-limited, attempt a fallback model once.
    if (!primaryResponse.ok) {
      const status = primaryResponse.status;
      const errorText = await primaryResponse.text();
      console.error("OpenRouter primary model error:", errorText);

      if (status === 429) {
        const fallbackPayload = {
          ...payload,
          model: "openai/gpt-4o-mini"
        };

        try {
          const fallbackResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${OPENROUTER_API_KEY}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "http://localhost:3000",
              "X-Title": "Amit Naikwadi - Digital Twin (fallback)"
            },
            body: JSON.stringify(fallbackPayload)
          });

          if (!fallbackResponse.ok) {
            const fallbackText = await fallbackResponse.text();
            console.error("OpenRouter fallback model error:", fallbackText);
            return NextResponse.json(
              {
                error:
                  "Digital Twin is currently rate-limited. Please try again in a few moments."
              },
              { status: 429 }
            );
          }

          const fallbackData = (await fallbackResponse.json()) as {
            choices?: { message?: { content?: string } }[];
          };

          const fallbackReply = fallbackData.choices?.[0]?.message?.content?.trim();

          if (!fallbackReply) {
            return NextResponse.json(
              { error: "Digital Twin did not return a response." },
              { status: 502 }
            );
          }

          return NextResponse.json({ reply: fallbackReply });
        } catch (fallbackError) {
          console.error("Digital Twin fallback route error:", fallbackError);
          return NextResponse.json(
            {
              error:
                "Digital Twin is currently rate-limited. Please try again in a few moments."
            },
            { status: 429 }
          );
        }
      }

      return NextResponse.json(
        { error: "Failed to reach Digital Twin provider." },
        { status: 502 }
      );
    }

    const data = (await primaryResponse.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "Digital Twin did not return a response." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Digital Twin route error:", error);
    return NextResponse.json(
      { error: "Unexpected error while contacting Digital Twin." },
      { status: 500 }
    );
  }
}

