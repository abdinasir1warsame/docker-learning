const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const QuestionSchema = new mongoose.Schema(
  {
    topic: { type: String, default: 'general' },
    question: { type: String, required: true },
    options: { type: [String], required: true },
    // index of the correct option inside options array
    correctAnswer: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', QuestionSchema);
