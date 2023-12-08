const Agriculteur = require('../models/agriculteur');

exports.createAgriculteur = async (req, res) => {
  try {
    const nouvelAgriculteur = await Agriculteur.create(req.body);
    res.status(201).json(nouvelAgriculteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllAgriculteurs = async (req, res) => {
  try {
    const Agriculteurs = await Agriculteur.find()
      .populate('parcelle') // Peuple le champ 'parcelle' avec les détails des parcelles
      .populate('article'); // Peuple le champ 'article' avec les détails des articles
    res.json(Agriculteurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAgriculteurById = async (req, res) => {
  try {
    const singleAgriculteur = await Agriculteur.findById(req.params.id)
      .populate('parcelle') // Peuple le champ 'parcelle' avec les détails des parcelles
      .populate('article'); // Peuple le champ 'article' avec les détails des articles
    if (!singleAgriculteur) {
      return res.status(404).json({ message: 'Agriculteur non trouvé' });
    }
    res.json(singleAgriculteur);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateAgriculteur = async (req, res) => {
  try {
    const updatedAgriculteur = await Agriculteur.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('parcelle') // Peuple le champ 'parcelle' avec les détails des parcelles
      .populate('article'); // Peuple le champ 'article' avec les détails des articles
    if (!updatedAgriculteur) {
      return res.status(404).json({ message: 'Agriculteur non trouvé' });
    }
    res.json(updatedAgriculteur);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteAgriculteur = async (req, res) => {
  try {
    const deletedAgriculteur = await Agriculteur.findByIdAndDelete(req.params.id);
    if (!deletedAgriculteur) {
      return res.status(404).json({ message: 'Agriculteur non trouvé' });
    }
    res.json({ message: 'Agriculteur supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
