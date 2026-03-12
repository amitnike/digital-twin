"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

async function sendToDigitalTwin(payload: {
  message: string;
  history: ChatMessage[];
}): Promise<string> {
  const response = await fetch("/api/digital-twin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Digital Twin API error:", text);
    throw new Error("Digital Twin is temporarily unavailable.");
  }

  const data = (await response.json()) as { reply?: string };
  if (!data.reply) {
    throw new Error("No response from Digital Twin.");
  }
  return data.reply;
}

function createId() {
  return Math.random().toString(36).slice(2);
}

const initialAssistantMessage: ChatMessage = {
  id: "initial",
  role: "assistant",
  content:
    "Hi, I’m Amit’s Digital Twin. Ask me about my career journey, impact at Mastercard and HSBC, technical strengths, or how I approach leadership and platform strategy."
};

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([initialAssistantMessage]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasMessages = useMemo(() => messages.length > 0, [messages.length]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isThinking) return;

    setError(null);

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed
    };
    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput("");
    setIsThinking(true);

    try {
      const reply = await sendToDigitalTwin({
        message: trimmed,
        history: newHistory
      });
      const assistantMessage: ChatMessage = {
        id: createId(),
        role: "assistant",
        content: reply
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError(
        "I’m having trouble connecting right now. Please try again in a moment or refresh the page."
      );
    } finally {
      setIsThinking(false);
    }
  }

  return (
    <section
      aria-labelledby="digital-twin-heading"
      className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.75)] ring-1 ring-slate-900/80"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2
            id="digital-twin-heading"
            className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg"
          >
            Digital Twin — Career Chat
          </h2>
          <p className="mt-1 max-w-xl text-xs text-slate-300 sm:text-sm">
            Have a conversation with an AI twin of Amit that{" "}
            <span className="font-medium text-slate-100">
              answers in Amit&apos;s voice about his career, skills, impact, and leadership style
            </span>{" "}
            based on the profile above.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-emerald-300 ring-1 ring-emerald-500/40">
          Live · AI powered
        </span>
      </div>

      <div className="mt-2 space-y-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
        <div className="h-56 space-y-2 overflow-y-auto pr-1 text-xs sm:h-64 sm:text-sm">
          {hasMessages ? (
            messages.map(message => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    message.role === "user"
                      ? "bg-brand-500 text-slate-50"
                      : "bg-slate-900/80 text-slate-100 border border-slate-700/80"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-[0.78rem] leading-relaxed sm:text-[0.8rem]">
                    {message.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-slate-400">
              Ask the Digital Twin anything about Amit&apos;s career.
            </div>
          )}
          {isThinking && (
            <div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span>Thinking...</span>
            </div>
          )}
        </div>

        {error && (
          <p className="text-[0.7rem] text-rose-400" role="status">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder="Ask about roles, impact, leadership, or skills..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 sm:text-sm"
          />
          <button
            type="submit"
            disabled={isThinking || !input.trim()}
            className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-3 py-2 text-xs font-semibold text-slate-50 shadow-md shadow-brand-500/40 transition hover:-translate-y-0.5 hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:shadow-none sm:px-4 sm:text-sm"
          >
            {isThinking ? "Sending..." : "Ask"}
          </button>
        </form>
      </div>
    </section>
  );
}

