const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String,
    category: String,
    difficulty: String
});

module.exports = mongoose.model('Questions', questionSchema);
