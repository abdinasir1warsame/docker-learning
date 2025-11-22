import React, { useState, useEffect } from 'react';

function QuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Fetch questions from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, []);

  if (!questions.length) return <div>Loading...</div>;

  const current = questions[idx];

  function handleSelect(i) {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.correctAnswer) setScore((s) => s + 1);
  }

  function handleNext() {
    if (idx + 1 < questions.length) {
      setIdx((i) => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function handlePrevious() {
    if (idx > 0) {
      setIdx((i) => i - 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center bg-white/95 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quiz Complete
          </h2>
          <p className="text-lg text-gray-600 mb-6">You scored</p>
          <div className="text-6xl font-extrabold text-blue-600 mb-4">
            {score} / {questions.length}
          </div>
          <div className="text-xl text-gray-700 mb-6">{percent}%</div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold"
            >
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <span className="text-white font-bold text-sm">
                  Question {idx + 1} of {questions.length}
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <span className="text-white font-bold text-sm">
                  Score: {score}
                </span>
              </div>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-300"
                style={{
                  width: `${Math.round(((idx + 1) / questions.length) * 100)}%`,
                }}
              />
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {current.question}
              </h2>
              <p className="text-gray-500 text-sm">Select the best answer</p>
            </div>

            <div className="space-y-4">
              {current.options.map((opt, i) => {
                const isSelected = selected === i;
                const isCorrect = current.correctAnswer === i;
                let base =
                  'w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center';
                let extra =
                  'border-gray-200 hover:border-blue-500 hover:bg-blue-50';
                if (selected !== null) {
                  if (isCorrect) extra = 'border-green-400 bg-green-50';
                  else if (isSelected && !isCorrect)
                    extra = 'border-red-400 bg-red-50';
                  else extra = 'border-gray-200 bg-white';
                }
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelect(i)}
                    className={`${base} ${extra}`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-4 transition-colors ${
                          isSelected ? 'font-bold' : ''
                        }`}
                      >
                        <span
                          className={`font-bold ${
                            isSelected ? 'text-gray-800' : 'text-gray-600'
                          }`}
                        >
                          {String.fromCharCode(65 + i)}
                        </span>
                      </div>
                      <span className="text-lg text-gray-700 font-medium">
                        {opt}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={idx === 0}
                className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                {idx + 1 < questions.length ? 'Next Question →' : 'Finish Quiz'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setFinished(true)}
            className="text-white/80 hover:text-white font-medium text-sm underline"
          >
            Skip Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
