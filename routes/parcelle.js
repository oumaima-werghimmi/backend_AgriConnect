const express = require('express');
const router = express.Router();
const parcelleController = require('../controllers/parcelle');



/**
 * @swagger
 * /parcelle:
 *   post:
 *     summary: Créer une nouvelle parcelle
 *     description: Crée une nouvelle entrée de parcelle
 *     tags: [Parcelles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ParcelleInput'
 *     responses:
 *       '201':
 *         description: Parcelle créée avec succès
 *       '400':
 *         description: Données de requête invalides
 */
router.post('/', parcelleController.createParcelle);

/**
 * @swagger
 * /parcelle:
 *   get:
 *     summary: Obtenir toutes les parcelles
 *     description: Récupère toutes les parcelles enregistrées
 *     tags: [Parcelles]
 *     responses:
 *       '200':
 *         description: Succès de la récupération des parcelles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ParcelleInput'
 */
router.get('/', parcelleController.getAllParcelles);
router.get('/:id', parcelleController.getParcelleById);
router.put('/:id', parcelleController.updateParcelle);
router.delete('/:id', parcelleController.deleteParcelle);

module.exports = router;
