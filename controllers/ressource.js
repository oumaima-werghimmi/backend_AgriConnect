const Ressource = require('../models/ressource');

exports.createRessource = async (req, res) => {
  try {
    const nouvelRessource = await Ressource.create(req.body);
    res.status(201).json(nouvelRessource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllRessources = async (req, res) => {
  try {
    const ressources = await Ressource.find();
    res.json(ressources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getRessourceById = async (req, res) => {
  try {
    const singleRessource = await Ressource.findById(req.params.id);
    if (!singleRessource) {
      return res.status(404).json({ message: 'Ressource non trouvé' });
    }
    res.json(singleRessource);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRessource = async (req, res) => {
  try {
    const updatedRessource = await Ressource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRessource) {
      return res.status(404).json({ message: 'Ressource non trouvé' });
    }
    res.json(updatedRessource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRessource = async (req, res) => {
  try {
    const deletedRessource = await Ressource.findByIdAndDelete(req.params.id);
    if (!deletedRessource) {
      return res.status(404).json({ message: 'Ressource non trouvé' });
    }
    res.json({ message: 'Ressource supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
