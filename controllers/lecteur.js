const Lecteur = require('../models/lecteur');

exports.createLecteur = async (req, res) => {
  try {
    const nouvelLecteur = await Lecteur.create(req.body);
    res.status(201).json(nouvelLecteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllLecteurs = async (req, res) => {
  try {
    const Lecteurs = await Lecteur.find().populate('commentaire'); // Peuple le champ 'commentaire' avec les détails des commentaires
    res.json(Lecteurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getLecteurById = async (req, res) => {
  try {
    const singleLecteur = await Lecteur.findById(req.params.id).populate('commentaire'); // Peuple le champ 'commentaire' avec les détails des commentaires
    if (!singleLecteur) {
      return res.status(404).json({ message: 'Lecteur non trouvé' });
    }
    res.json(singleLecteur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateLecteur = async (req, res) => {
  try {
    const updatedLecteur = await Lecteur.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('commentaire'); // Peuple le champ 'commentaire' avec les détails des commentaires
    if (!updatedLecteur) {
      return res.status(404).json({ message: 'Lecteur non trouvé' });
    }
    res.json(updatedLecteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteLecteur = async (req, res) => {
  try {
    const deletedLecteur = await Lecteur.findByIdAndDelete(req.params.id);
    if (!deletedLecteur) {
      return res.status(404).json({ message: 'Lecteur non trouvé' });
    }
    res.json({ message: 'Lecteur supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
