const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz.model');
const { verifyToken, isPengajar, isUser } = require('../middlewares/auth.middleware');

// BUAT KUIS (pengajar/admin)
router.post('/:materiId', verifyToken, isPengajar, async (req, res) => {
  try {
    const quiz = await Quiz.create({
      materiId: req.params.materiId,
      questions: req.body.questions
    });
    res.json({ message: 'Kuis berhasil dibuat', quiz });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LIHAT KUIS (user, tanpa correctAnswer)
router.get('/:materiId', verifyToken, isUser, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ materiId: req.params.materiId });
    if (!quiz) return res.status(404).json({ message: 'Kuis tidak ditemukan' });

    const sanitized = quiz.questions.map(q => ({
      question: q.question,
      options: q.options
    }));

    res.json({ materiId: quiz.materiId, questions: sanitized });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SUBMIT KUIS (user)
router.post('/submit/:materiId', verifyToken, isUser, async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ materiId: req.params.materiId });
    if (!quiz) return res.status(404).json({ message: 'Kuis tidak ditemukan' });

    const answers = req.body.answers; // array of string
    let score = 0;

    quiz.questions.forEach((q, i) => {
      if (answers[i] && answers[i] === q.correctAnswer) {
        score++;
      }
    });

    res.json({
      message: 'Kuis selesai',
      total: quiz.questions.length,
      benar: score
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
