const mongoose = require('mongoose');
const { schema } = mongoose.schema;

const questionSchema = new Schema({
  questions: { type: String },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  category: { type: String },
});

module.exports = mongoose.model('Questions', questionSchema);
