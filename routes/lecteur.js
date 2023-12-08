const express = require('express');
const router = express.Router();
const lecteurController = require('../controllers/lecteur');

router.post('/', lecteurController.createLecteur);
router.get('/', lecteurController.getAllLecteurs);
router.get('/:id', lecteurController.getLecteurById);
router.put('/:id', lecteurController.updateLecteur);
router.delete('/:id', lecteurController.deleteLecteur);

module.exports = router;
