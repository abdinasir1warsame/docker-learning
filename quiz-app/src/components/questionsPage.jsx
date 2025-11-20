function QuestionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <span className="text-white font-bold text-sm">
                  Question 3 of 10
                </span>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
                <span className="text-white font-bold text-sm">⏱️ 2:45</span>
              </div>
            </div>
            <div className="w-full bg-white/30 rounded-full h-3">
              <div className="bg-white rounded-full h-3 w-3/10 transition-all duration-300"></div>
            </div>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                What is the primary purpose of a subnet mask?
              </h2>
              <p className="text-gray-500 text-sm">Select the best answer</p>
            </div>
            <div className="space-y-4">
              <button className="w-full text-left p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center mr-4 transition-colors">
                    <span className="font-bold text-gray-600 group-hover:text-white">
                      A
                    </span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    To identify network and host portions of an IP address
                  </span>
                </div>
              </button>
              <button className="w-full text-left p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center mr-4 transition-colors">
                    <span className="font-bold text-gray-600 group-hover:text-white">
                      B
                    </span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    To encrypt network traffic
                  </span>
                </div>
              </button>
              <button className="w-full text-left p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center mr-4 transition-colors">
                    <span className="font-bold text-gray-600 group-hover:text-white">
                      C
                    </span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    To block unauthorized access
                  </span>
                </div>
              </button>
              <button className="w-full text-left p-5 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 group">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-blue-500 flex items-center justify-center mr-4 transition-colors">
                    <span className="font-bold text-gray-600 group-hover:text-white">
                      D
                    </span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">
                    To speed up data transmission
                  </span>
                </div>
              </button>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <button className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all">
                ← Previous
              </button>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:shadow-lg transform hover:scale-105 transition-all">
                Next Question →
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button className="text-white/80 hover:text-white font-medium text-sm underline">
            Skip Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
export default QuestionsPage;
