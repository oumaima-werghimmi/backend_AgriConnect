const express = require('express');
const router = express.Router();
const commentaireController = require('../controllers/commentaire');

router.post('/', commentaireController.createCommentaire);
router.get('/', commentaireController.getAllCommentaires);
router.get('/:id', commentaireController.getCommentaireById);
router.put('/:id', commentaireController.updateCommentaire);
router.delete('/:id', commentaireController.deleteCommentaire);

module.exports = router;
