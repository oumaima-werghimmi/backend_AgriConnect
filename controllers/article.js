const Article = require('../models/article');

exports.createArticle = async (req, res) => {
  try {
    const nouvelArticle = await Article.create(req.body);
    res.status(201).json(nouvelArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().populate('commentaire');
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const singleArticle = await Article.findById(req.params.id).populate('commentaire');
    if (!singleArticle) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }
    res.json(singleArticle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }
    res.json({ message: 'Article supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
