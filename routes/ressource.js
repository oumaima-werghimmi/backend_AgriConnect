const express = require('express');
const router = express.Router();
const ressourceController = require('../controllers/ressource');

/**
 * @swagger
 * /ressources:
 *   post:
 *     summary: Créer une nouvelle ressource
 *     description: Crée une nouvelle entrée de ressource
 *     tags: [Ressources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RessourceInput'
 *     responses:
 *       '201':
 *         description: Ressource créée avec succès
 *       '400':
 *         description: Données de requête invalides
 */
router.post('/', ressourceController.createRessource);

/**
 * @swagger
 * /ressources:
 *   get:
 *     summary: Obtenir toutes les ressources
 *     description: Récupère toutes les ressources enregistrées
 *     tags: [Ressources]
 *     responses:
 *       '200':
 *         description: Succès de la récupération des ressources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RessourceOutput'
 */
router.get('/', ressourceController.getAllRessources);
router.get('/:id', ressourceController.getRessourceById);
router.put('/:id', ressourceController.updateRessource);
router.delete('/:id', ressourceController.deleteRessource);

module.exports = router;
