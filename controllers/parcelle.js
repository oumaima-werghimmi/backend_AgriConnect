const Parcelle = require('../models/parcelle');

exports.createParcelle = async (req, res) => {
  try {
    const nouvelParcelle = await Parcelle.create(req.body);
    res.status(201).json(nouvelParcelle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllParcelles = async (req, res) => {
  try {
    const Parcelles = await Parcelle.find()
      .populate('ressource') // Peuple le champ 'ressource' avec les détails des ressources
      .populate('culture'); // Peuple le champ 'culture' avec les détails des cultures
    res.json(Parcelles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getParcelleById = async (req, res) => {
  try {
    const singleParcelle = await Parcelle.findById(req.params.id)
      .populate('ressource') // Peuple le champ 'ressource' avec les détails des ressources
      .populate('culture'); // Peuple le champ 'culture' avec les détails des cultures
    if (!singleParcelle) {
      return res.status(404).json({ message: 'Parcelle non trouvée' });
    }
    res.json(singleParcelle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateParcelle = async (req, res) => {
  try {
    const updatedParcelle = await Parcelle.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('ressource') // Peuple le champ 'ressource' avec les détails des ressources
      .populate('culture'); // Peuple le champ 'culture' avec les détails des cultures
    if (!updatedParcelle) {
      return res.status(404).json({ message: 'Parcelle non trouvée' });
    }
    res.json(updatedParcelle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteParcelle = async (req, res) => {
  try {
    const deletedParcelle = await Parcelle.findByIdAndDelete(req.params.id);
    if (!deletedParcelle) {
      return res.status(404).json({ message: 'Parcelle non trouvée' });
    }
    res.json({ message: 'Parcelle supprimée' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
