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
    <div className="relative w-full max-w-4xl mx-auto px-3 sm:px-6 my-10 select-none">
      
      {/* Quiz Card Container */}
      <div className="relative bg-[#FFF9ED] border-4 border-[#2A1D18] rounded-3xl sm:rounded-[36px] shadow-[8px_10px_0px_#2A1D18] p-5 sm:p-8 overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b-3 border-[#2A1D18]/20 pb-3 mb-5 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#E8769D] border-2 border-[#2A1D18] flex items-center justify-center text-sm font-bold shadow-2xs">
              🎯
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-[#2A1D18]">
              The Prithvi &amp; Varshini Guest Quiz!
            </h3>
          </div>
          <span className="font-comic text-xs font-bold text-[#2A1D18] bg-[#F5B738] px-3 py-1 rounded-full border-2 border-[#2A1D18] shadow-2xs">
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
              <h4 className="font-serif text-lg sm:text-2xl font-bold text-[#2A1D18] mb-4 leading-snug">
                {q.question}
              </h4>

              {/* Options */}
              <div className="space-y-3 mb-5">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  let btnStyle = 'bg-[#FAF7F0] hover:bg-[#FEE580] text-[#2A1D18] border-[#2A1D18]';
                  
                  if (selectedOption !== null) {
                    if (opt.isCorrect) {
                      btnStyle = 'bg-[#6A9A4A] text-white border-[#2A1D18] shadow-sm';
                    } else if (isSelected) {
                      btnStyle = 'bg-[#EF476F] text-white border-[#2A1D18]';
                    } else {
                      btnStyle = 'bg-[#FAF7F0]/60 text-[#2A1D18]/50 border-[#2A1D18]/30 cursor-not-allowed';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={selectedOption !== null}
                      onClick={() => handleSelect(optIdx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border-2 sm:border-3 font-comic text-sm sm:text-base font-bold transition-all shadow-[2px_3px_0px_#2A1D18] flex items-center justify-between gap-3 ${btnStyle} ${selectedOption === null ? 'cursor-pointer active:scale-[0.99]' : ''}`}
                    >
                      <span>{opt.text}</span>
                      {selectedOption !== null && opt.isCorrect && <span>✅</span>}
                      {selectedOption !== null && isSelected && !opt.isCorrect && <span>❌</span>}
                    </button>
                  );
                })}
              </div>

              {/* Feedback & Next Button */}
              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#FAF7F0] border-2 border-dashed border-[#2A1D18] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl shrink-0">✨</span>
                    <p className="font-comic text-xs sm:text-sm text-[#2A1D18] font-bold">
                      {q.funFact}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="shrink-0 px-5 py-2 bg-[#F5B738] hover:bg-[#ffc753] text-[#2A1D18] font-comic text-sm font-extrabold rounded-full border-2 border-[#2A1D18] shadow-[2px_2px_0px_#2A1D18] active:scale-95 transition-transform cursor-pointer"
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
              <h4 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2A1D18]">
                You scored {score} / {QUESTIONS.length}!
              </h4>
              <p className="font-comic text-base sm:text-lg text-[#487A38] font-bold mt-1">
                “Certified Official VIP Guest of Honor!”
              </p>
              <p className="font-comic text-xs sm:text-sm text-[#2A1D18]/80 max-w-md mx-auto mt-2">
                You know Prithvi &amp; Varshini inside and out! We can&apos;t wait to celebrate with you on November 18 &amp; 19 in Bengaluru!
              </p>

              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-5 py-2 bg-[#FAF7F0] hover:bg-[#FEE580] text-[#2A1D18] font-comic text-xs sm:text-sm font-bold rounded-full border-2 border-[#2A1D18] shadow-xs cursor-pointer active:scale-95 transition-transform"
                >
                  🔄 Play Again
                </button>
                <button
                  type="button"
                  onClick={onThrowConfetti}
                  className="px-5 py-2 bg-[#F5B738] hover:bg-[#ffc753] text-[#2A1D18] font-comic text-xs sm:text-sm font-bold rounded-full border-2 border-[#2A1D18] shadow-xs cursor-pointer active:scale-95 transition-transform"
                >
                  🎊 Celebrate!
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
