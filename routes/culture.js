const express = require('express');
const router = express.Router();
const cultureController = require('../controllers/culture');



/**
 * @swagger
 * /culture:
 *   post:
 *     summary: Créer une nouvelle culture
 *     description: Crée une nouvelle entrée de culture
 *     tags: [Cultures]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CultureInput'
 *     responses:
 *       '201':
 *         description: Culture créée avec succès
 *       '400':
 *         description: Données de requête invalides
 */
router.post('/', cultureController.createCulture);
/**
 * @swagger
 * /culture:
 *   get:
 *     summary: Obtenir toutes les cultures
 *     description: Récupère toutes les cultures enregistrées
 *     tags: [Cultures]
 *     responses:
 *       '200':
 *         description: Succès de la récupération des cultures
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CultureInput'
 */
router.get('/', cultureController.getAllCultures);
router.get('/:id', cultureController.getCultureById);
router.put('/:id', cultureController.updateCulture);
router.delete('/:id', cultureController.deleteCulture);

module.exports = router;
