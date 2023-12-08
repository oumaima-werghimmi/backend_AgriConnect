const express = require('express');
const router = express.Router();
const agriculteurController = require('../controllers/agriculteur');

/**
 * @swagger
 * /agriculteurs:
 *   post:
 *     summary: Créer un nouvel agriculteur
 *     description: Crée une nouvelle entrée d'agriculteur
 *     tags: [Agriculteurs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgriculteurInput'
 *     responses:
 *       '201':
 *         description: Agriculteur créé avec succès
 *       '400':
 *         description: Données de requête invalides
 */
router.post('/', agriculteurController.createAgriculteur);

/**
 * @swagger
 * /agriculteurs:
 *   get:
 *     summary: Obtenir tous les agriculteurs
 *     description: Récupère tous les agriculteurs enregistrés
 *     tags: [Agriculteurs]
 *     responses:
 *       '200':
 *         description: Succès de la récupération des agriculteurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/AgriculteurOutput'
 */
router.get('/', agriculteurController.getAllAgriculteurs);
router.get('/:id', agriculteurController.getAgriculteurById);
router.put('/:id', agriculteurController.updateAgriculteur);
router.delete('/:id', agriculteurController.deleteAgriculteur);

module.exports = router;
