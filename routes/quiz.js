const express = require('express');
const Question = require('../models/Questions');
const router = express.Router();

// ✅ Fetch random 5 questions from quizdb
router.get('/', async (req, res) => {
    try {
        const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
