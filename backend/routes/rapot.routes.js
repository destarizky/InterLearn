const express = require('express');
const router = express.Router();
const rapotController = require('../controllers/rapot.controller');

// Simpan hasil kuis ke rapot
router.post('/', rapotController.createRapot);

// Ambil semua rapot milik user tertentu
router.get('/user/:userId', rapotController.getRapotByUser);

module.exports = router;