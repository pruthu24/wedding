import { useState, useEffect, useRef } from 'react';
import { ConciergeMascot } from './ConciergeMascot';
import { DoodleHeart, DoodleArrow, DoodleSparkle } from './DoodleIcons';
import { wedding, whatsappUrl } from '../../config/wedding';

interface ChatMessage {
  role: 'ai' | 'guest';
  content: string;
  rawContent?: string;
}

const INITIAL_MESSAGE: ChatMessage = {
  role: 'ai',
  content:
    "Heyyy! 👋 Welcome to Prithvi & Varshini's little corner of happiness!\n\nI'm their tiny wedding sidekick, here to help you find all the details and make sure you don't miss the fun. 💌\n\nFirst things first... what's your name, and are you joining us from the bride's side or the groom's side?",
  rawContent:
    "Heyyy! 👋 Welcome to Prithvi & Varshini's little corner of happiness!\n\nI'm their tiny wedding sidekick, here to help you find all the details and make sure you don't miss the fun. 💌\n\nFirst things first... what's your name, and are you joining us from the bride's side or the groom's side?",
};

const SUGGESTED_PROMPTS = [
  '📍 Where is the wedding happening?',
  '🕺 When does the party begin?',
  '💍 Tell me about the wedding events.',
  '🗺️ Help me find the venue.',
  '💌 I have something to tell the couple!',
  "🎉 I'm coming! Save me a spot!",
];

const FUNNY_LOADING_PHRASES = [
  'Consulting the wedding astrologer 📜✨...',
  'Checking the happy guest list 🧐📝...',
  'Asking Varshu what to say next 🏃‍♀️💨...',
  'Waking up Prithvi for the answer 😴☕...',
  'Arranging the fragrant jasmine garlands 🌸...',
  'Polishing the wedding rings 💍✨...',
  'Drafting the dream guest list 💌...',
];

export function DoodleRSVP() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loadingPhrase, setLoadingPhrase] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isRequestPending = useRef(false);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isRequestPending.current) return;

    isRequestPending.current = true;
    setLoadingPhrase(FUNNY_LOADING_PHRASES[Math.floor(Math.random() * FUNNY_LOADING_PHRASES.length)]);
    setIsTyping(true);

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'guest', content: text, rawContent: text },
    ];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role === 'ai' ? 'assistant' : 'user',
            content: m.rawContent || m.content,
          })),
          stream: true,
        }),
      });

      if (!response.body) throw new Error('No response body');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let fullContent = '';
      let displayContent = '';
      let hasStartedTyping = false;
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.trim().startsWith('data: ') && line.trim() !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.trim().slice(6));
              const deltaContent = data.choices[0]?.delta?.content;

              if (deltaContent) {
                if (!hasStartedTyping) {
                  hasStartedTyping = true;
                  setIsTyping(false);
                  setMessages((prev) => [...prev, { role: 'ai', content: '', rawContent: '' }]);
                }

                fullContent += deltaContent;

                if (fullContent.toUpperCase().includes('<STATE>')) {
                  displayContent = fullContent.split(/<STATE>/i)[0].trim();
                } else {
                  displayContent = fullContent;
                }

                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1].content = displayContent;
                  updated[updated.length - 1].rawContent = fullContent;
                  return updated;
                });

                if (fullContent.toUpperCase().includes('</STATE>')) {
                  reader.cancel();
                  break;
                }
              }
            } catch {
              // Ignore partial JSON
            }
          }
        }

        if (fullContent.toUpperCase().includes('</STATE>')) {
          break;
        }
      }

      if (!hasStartedTyping) {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            role: 'ai',
            content: fullContent || "I'm right here with Prithvi & Varshu! How can I help you next?",
            rawContent: fullContent,
          },
        ]);
      }

      // Check for <STATE> tag to persist RSVP
      const stateMatch = fullContent.match(/<STATE>([\s\S]*?)<\/STATE>/i);
      if (stateMatch) {
        try {
          const stateJson = JSON.parse(stateMatch[1]);
          if (stateJson.guestName) {
            fetch('/api/rsvp', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ state: stateJson }),
            })
              .then(() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(
                    new CustomEvent('guest-blessing-updated', { detail: stateJson.guestName })
                  );
                }
              })
              .catch((e) => console.error('Failed to save RSVP:', e));
          }
        } catch (e) {
          console.error('Failed to parse state json', e);
        }
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            "Our little concierge is sipping filter coffee ☕. But don't worry, you can also message the couple directly via WhatsApp below!",
        },
      ]);
    } finally {
      isRequestPending.current = false;
    }
  };

  return (
    <section
      id="rsvp"
      aria-label="RSVP Experience"
      className="relative min-h-[100svh] w-full py-20 sm:py-28 bg-[#FAF8F3] notebook-grid overflow-hidden flex flex-col items-center justify-center px-4"
    >
      {/* ----------------- Section Header ----------------- */}
      <div className="relative z-10 max-w-3xl text-center mb-8 select-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFDF8] border-2 border-[#262626] rounded-full shadow-[2px_2px_0px_#262626] mb-3">
          <DoodleHeart className="w-4 h-4 text-[#EF476F]" />
          <span className="font-hand text-xs uppercase tracking-widest font-bold text-[#D96C4A]">
            Your Presence = Our Happiness ❤️
          </span>
        </div>

        <h2 className="font-doodle text-4xl sm:text-6xl md:text-7xl font-bold text-[#262626] tracking-tight">
          So... are you coming?
        </h2>

        <p className="font-hand text-base sm:text-xl text-[#262626]/85 max-w-xl mx-auto mt-2 italic">
          Help us save you a little spot in our storybook.
        </p>

        <div className="mt-2 flex items-center justify-center gap-2">
          <DoodleArrow direction="down" className="w-6 h-8 text-[#EF476F]" />
          <span className="font-doodle text-xs text-[#EF476F] font-bold">
            Chat with our wedding sidekick below!
          </span>
        </div>
      </div>

      {/* ----------------- The Doodle Scrapbook Chat Panel ----------------- */}
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl bg-[#FFFDF8] border-3 border-[#262626] rounded-sm shadow-[6px_8px_0px_#262626] overflow-hidden flex flex-col z-20"
      >
        {/* Top Washi Tape */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#FFD166]/85 border border-[#262626]/40 shadow-xs rotate-1 z-30 pointer-events-none"
          style={{
            clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 12%, 98% 88%, 95% 100%, 4% 100%, 0% 88%)',
          }}
        />

        {/* Mascot & Header Bar */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-[#FAF8F3] border-b-2 border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ConciergeMascot isTyping={isTyping} />
            <div>
              <h3 className="font-doodle text-xl sm:text-2xl font-bold text-[#262626] leading-none">
                Prithvi &amp; Varshu&apos;s Assistant
              </h3>
              <p className="font-hand text-xs text-[#06D6A0] font-bold mt-0.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#06D6A0] animate-pulse" />
                Online &amp; Ready to help!
              </p>
            </div>
          </div>
          <DoodleSparkle className="w-5 h-5 text-[#FFD166]" />
        </div>

        {/* Chat Scroll Area */}
        <div
          ref={chatContainerRef}
          className="p-4 sm:p-6 space-y-4 max-h-[420px] min-h-[300px] overflow-y-auto overscroll-contain bg-[#FFFDF8]"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[78%] p-3.5 sm:p-4 rounded-sm border-2 border-[#262626] font-hand text-base sm:text-lg leading-relaxed whitespace-pre-wrap select-text ${
                  msg.role === 'ai'
                    ? 'bg-[#FAF8F3] text-[#262626] shadow-[2px_2px_0px_#262626] rounded-tl-none'
                    : 'bg-[#FFD166] text-[#262626] font-semibold shadow-[2px_2px_0px_#262626] rounded-tr-none'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#FAF8F3] border-2 border-[#262626] rounded-sm rounded-tl-none p-3 shadow-[2px_2px_0px_#262626] font-hand text-xs sm:text-sm text-[#D96C4A] italic flex items-center gap-2">
                <span>{loadingPhrase}</span>
                <span className="animate-bounce">✍️</span>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Conversation Starters (Sticker Buttons) */}
        <div className="px-3 py-2 bg-[#FAF8F3] border-t-2 border-dashed border-[#262626]/20">
          <p className="font-hand text-xs text-[#262626]/70 font-bold mb-1.5 px-1">
            Suggested questions (tap to ask):
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide snap-x">
            {SUGGESTED_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt)}
                className="shrink-0 snap-start px-2.5 py-1 bg-[#FFFDF8] hover:bg-[#FFD166] text-[#262626] font-hand text-xs font-semibold rounded-full border border-[#262626] shadow-xs transition-colors whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Field & Send Button */}
        <div className="p-3 sm:p-4 bg-[#FAF8F3] border-t-2 border-[#262626]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message or ask a question..."
              className="flex-1 px-4 py-2.5 bg-[#FFFDF8] border-2 border-[#262626] rounded-full font-hand text-base text-[#262626] placeholder:text-[#262626]/40 focus:outline-hidden focus:ring-2 focus:ring-[#FFD166] shadow-xs"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-5 py-2.5 bg-[#EF476F] hover:bg-[#ff3b68] disabled:opacity-50 text-white font-doodle text-lg font-bold rounded-full border-2 border-[#262626] shadow-[2px_2px_0px_#262626] transition-transform active:translate-y-0.5"
            >
              Send 🚀
            </button>
          </form>
        </div>
      </div>

      {/* ----------------- WhatsApp Integration Alternative ----------------- */}
      <div className="relative z-20 mt-8 text-center max-w-md w-full">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#06D6A0] hover:bg-[#1ee3b0] text-[#262626] font-doodle text-lg font-bold rounded-full border-2 border-[#262626] shadow-[3px_4px_0px_#262626] active:translate-y-0.5 transition-all w-full sm:w-auto"
        >
          <span className="text-xl">📲</span>
          <span>Prefer WhatsApp? Chat directly with the couple</span>
        </a>
        <p className="font-hand text-xs text-[#262626]/70 mt-2">
          Number: +{wedding.rsvp.whatsappNumber}
        </p>
      </div>

      {/* ----------------- Sweet Closing Note ----------------- */}
      <div className="relative z-20 mt-14 text-center">
        <p className="font-doodle text-xl sm:text-2xl text-[#262626] font-bold">
          Drawn with love, excitement &amp; pure joy ❤️
        </p>
        <p className="font-hand text-sm text-[#D96C4A] font-semibold mt-1">
          Prithvi Kumar &amp; Varshini P S • 2026
        </p>
      </div>
    </section>
  );
}
