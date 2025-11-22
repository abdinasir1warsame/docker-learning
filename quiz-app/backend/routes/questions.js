const express = require('express');
const router = express.Router();
const questionsData = require('../data/questions.json');

// Shuffle helper
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pick N random items from an array
function pickRandomN(arr, n) {
  return shuffleArray(arr).slice(0, Math.min(n, arr.length));
}

// Prepare randomized questions with shuffled options
function getRandomQuestions(perTopic = 2) {
  const result = [];
  Object.values(questionsData).forEach((topic) => {
    pickRandomN(topic, perTopic).forEach((q) => {
      const correctOption = q.options[q.correctAnswer];
      const shuffled = shuffleArray(q.options);
      result.push({
        ...q,
        options: shuffled,
        correctAnswer: shuffled.findIndex((o) => o === correctOption),
      });
    });
  });
  return result;
}

// GET /api/questions
router.get('/', (req, res) => {
  try {
    res.json(getRandomQuestions(2)); // 2 questions per topic
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
