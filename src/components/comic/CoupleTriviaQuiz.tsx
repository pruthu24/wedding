import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean }[];
  funFact: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Where are you most likely to spot Prithvi & Varshini on a Sunday morning?",
    options: [
      { text: "Sipping piping-hot South Indian filter coffee in Bengaluru ☕", isCorrect: true },
      { text: "Running a 20km marathon before 6:00 AM 🏃‍♂️", isCorrect: false },
      { text: "Bargaining for houseplants at a nursery 🌿", isCorrect: false },
    ],
    funFact: "Bingo! Filter coffee runs in their veins — it's an unbreakable Bangalore tradition!",
  },
  {
    id: 2,
    question: "Who takes longer when deciding what to order for dinner?",
    options: [
      { text: "Varshini (Reviews every single dish like a food critic!) 📋", isCorrect: false },
      { text: "Prithvi (Reads 40 Google reviews first!) ⭐", isCorrect: false },
      { text: "Both of them — they end up ordering the whole menu! 🥘", isCorrect: true },
    ],
    funFact: "Spot on! 20 minutes of intense debate always ends with ordering all their favourites!",
  },
  {
    id: 3,
    question: "What is your official VIP mission for November 18 & 19, 2026?",
    options: [
      { text: "Dance with maximum energy at the Grand Reception! 💃", isCorrect: true },
      { text: "Eat at least three hot Mysore Paks & unlimited sweets! 🍯", isCorrect: true },
      { text: "Shower Prithvi & Varshini with endless blessings & love! 🌸", isCorrect: true },
    ],
    funFact: "100% Correct! All options are mandatory for an unforgettable wedding celebration!",
  },
];

export function CoupleTriviaQuiz({ onThrowConfetti }: { onThrowConfetti?: () => void }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const q = QUESTIONS[currentIdx];

  const handleSelect = (optIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optIdx);

    const isCorrect = q.options[optIdx].isCorrect;
    if (isCorrect) {
      setScore((s) => s + 1);
      onThrowConfetti?.();
    }
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
      onThrowConfetti?.();
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section id="quiz" className="relative w-full py-16 sm:py-24 select-none overflow-hidden bg-transparent">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-8 select-none">
        <div className="inline-block">
          <div className="flex items-center justify-center gap-2 text-[#3D2E24]/50 mb-1">
            <span className="font-hand text-lg">~ 🎯 ~</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#3D2E24] tracking-tight">
            Guest Trivia Quiz
          </h2>

          <p className="font-script text-2xl sm:text-3xl text-[#557A3C] mt-1">
            How Well Do You Know The Couple?
          </p>

          <p className="font-hand text-base sm:text-xl text-[#3D2E24]/80 max-w-lg mx-auto mt-2 leading-relaxed">
            Take a quick 3-question trivia challenge to unlock your certified VIP guest status!
          </p>
        </div>
      </div>

      {/* Quiz Card Container */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#FAF4E8]/95 backdrop-blur-xs border-2 border-[#3D2E24]/20 rounded-3xl shadow-md p-6 sm:p-10 overflow-hidden">
          
          {/* Top Card Bar */}
          <div className="flex items-center justify-between border-b border-[#3D2E24]/15 pb-4 mb-6 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#889A80] text-white flex items-center justify-center text-sm font-bold shadow-2xs">
                🎯
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2E24]">
                Prithvi &amp; Varshini Guest Quiz
              </h3>
            </div>
            <span className="font-hand text-sm font-bold text-[#3D2E24] bg-[#EAA82C]/20 border border-[#EAA82C]/40 px-3.5 py-1 rounded-full">
              {quizCompleted ? 'Quiz Complete 🎉' : `Question ${currentIdx + 1} of ${QUESTIONS.length}`}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {!quizCompleted ? (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Question Text */}
                <h4 className="font-serif text-lg sm:text-2xl font-bold text-[#3D2E24] mb-5 leading-snug">
                  {q.question}
                </h4>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOption === optIdx;
                    let btnStyle = 'bg-white hover:bg-[#889A80]/10 text-[#3D2E24] border-[#3D2E24]/20 shadow-2xs';
                    
                    if (selectedOption !== null) {
                      if (opt.isCorrect) {
                        btnStyle = 'bg-[#889A80]/25 text-[#3D2E24] font-bold border-[#889A80] shadow-xs';
                      } else if (isSelected) {
                        btnStyle = 'bg-[#DE8B7C]/25 text-[#3D2E24] border-[#DE8B7C]';
                      } else {
                        btnStyle = 'bg-white/40 text-[#3D2E24]/40 border-[#3D2E24]/10 cursor-not-allowed';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        disabled={selectedOption !== null}
                        onClick={() => handleSelect(optIdx)}
                        className={`w-full text-left p-4 rounded-2xl border font-hand text-base sm:text-lg transition-all flex items-center justify-between gap-3 ${btnStyle} ${selectedOption === null ? 'cursor-pointer active:scale-[0.99]' : ''}`}
                      >
                        <span>{opt.text}</span>
                        {selectedOption !== null && opt.isCorrect && <span className="text-xl">✅</span>}
                        {selectedOption !== null && isSelected && !opt.isCorrect && <span className="text-xl">❌</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback & Next Button */}
                {selectedOption !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-white border border-dashed border-[#3D2E24]/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl shrink-0">✨</span>
                      <p className="font-hand text-base sm:text-lg text-[#3D2E24] font-semibold leading-relaxed">
                        {q.funFact}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="shrink-0 px-6 py-2.5 bg-[#889A80] hover:bg-[#74866C] text-white font-serif text-sm font-bold uppercase tracking-wider rounded-full shadow-xs active:scale-95 transition-all cursor-pointer"
                    >
                      {currentIdx < QUESTIONS.length - 1 ? 'Next Question →' : 'See Your Results 🏆'}
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-6"
              >
                <div className="text-5xl mb-3">🎖️</div>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2E24]">
                  You scored {score} / {QUESTIONS.length}!
                </h4>
                <p className="font-script text-2xl sm:text-3xl text-[#557A3C] mt-1">
                  Certified Official VIP Guest of Honor!
                </p>
                <p className="font-hand text-base sm:text-lg text-[#3D2E24]/85 max-w-md mx-auto mt-2 leading-relaxed">
                  You know Prithvi &amp; Varshini inside and out! We can&apos;t wait to celebrate with you on November 18 &amp; 19 in Bengaluru!
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="px-6 py-2.5 bg-white hover:bg-[#FAF4E8] text-[#3D2E24] font-hand text-base font-bold rounded-full border border-[#3D2E24]/20 shadow-2xs cursor-pointer active:scale-95 transition-all"
                  >
                    🔄 Play Again
                  </button>
                  <button
                    type="button"
                    onClick={onThrowConfetti}
                    className="px-6 py-2.5 bg-[#889A80] hover:bg-[#74866C] text-white font-serif text-sm font-bold uppercase tracking-wider rounded-full shadow-xs cursor-pointer active:scale-95 transition-all"
                  >
                    🎊 Celebrate!
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

    </section>
  );
}
