const Commentaire = require('../models/commentaire');

exports.createCommentaire = async (req, res) => {
  try {
    const nouvelCommentaire = await Commentaire.create(req.body);
    res.status(201).json(nouvelCommentaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCommentaires = async (req, res) => {
  try {
    const Commentaires = await Commentaire.find();
    res.json(Commentaires);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommentaireById = async (req, res) => {
  try {
    const singleCommentaire = await Commentaire.findById(req.params.id);
    if (!singleCommentaire) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json(singleCommentaire);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCommentaire = async (req, res) => {
  try {
    const updatedCommentaire = await Commentaire.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommentaire) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json(updatedCommentaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCommentaire = async (req, res) => {
  try {
    const deletedCommentaire = await Commentaire.findByIdAndDelete(req.params.id);
    if (!deletedCommentaire) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json({ message: 'Commentaire supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
