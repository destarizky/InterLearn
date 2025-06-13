const express = require('express');
const router = express.Router();
const rapotController = require('../controllers/rapot.controller');

// Simpan hasil kuis ke rapot
router.post('/', rapotController.createRapot);

// Ambil semua rapot milik user tertentu
router.get('/user/:userId', rapotController.getRapotByUser);

// Update rapot berdasarkan ID
router.put('/:id', rapotController.updateRapotById);

// Hapus rapot berdasarkan ID
router.delete('/:id', rapotController.deleteRapotById);

module.exports = router;