import React from 'react';

function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-black text-white mb-4 drop-shadow-lg">
            QuizConnect
          </h1>
          <p className="text-2xl font-bold text-white/90 mb-2">
            🎯 Test Your Networking Skills
          </p>
        </div>
        <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Level Up? 🚀
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dive into an exciting quiz that challenges your networking
              knowledge! Test your skills across various topics and see how you
              stack up against the best in the field.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-purple-100 rounded-2xl p-4">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-semibold text-purple-800 text-sm">
                Quick & Fun
              </p>
            </div>
            <div className="bg-pink-100 rounded-2xl p-4">
              <div className="text-3xl mb-2">🎓</div>
              <p className="font-semibold text-pink-800 text-sm">
                Learn & Grow
              </p>
            </div>
            <div className="bg-orange-100 rounded-2xl p-4">
              <div className="text-3xl mb-2">🏆</div>
              <p className="font-semibold text-orange-800 text-sm">
                Challenge Yourself
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onStart}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Quiz Now! 🎉
          </button>
        </div>
        <p className="text-white/80 text-sm">
          No signup required • Takes about 5 minutes • Instant results
        </p>
      </div>
    </div>
  );
}
export default LandingPage;
