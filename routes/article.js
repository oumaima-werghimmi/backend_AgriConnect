const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Créer un nouvel article
 *     description: Crée une nouvelle entrée d'article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleInput'
 *     responses:
 *       '201':
 *         description: Article créé avec succès
 *       '400':
 *         description: Données de requête invalides
 */
router.post('/', articleController.createArticle);

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Obtenir tous les articles
 *     description: Récupère tous les articles enregistrés
 *     tags: [Articles]
 *     responses:
 *       '200':
 *         description: Succès de la récupération des articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ArticleOutput'
 */
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
