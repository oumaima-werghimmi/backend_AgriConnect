const Culture = require('../models/culture');


exports.createCulture = async (req, res) => {
  try {
    const newCulture = await Culture.create(req.body);
    res.status(201).json(newCulture);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCultures = async (req, res) => {
  try {
    const culturesList = await Culture.find();
    res.json(culturesList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCultureById = async (req, res) => {
  try {
    const foundCulture = await Culture.findById(req.params.id);
    if (!foundCulture) {
      return res.status(404).json({ message: 'Culture non trouvé' });
    }
    res.json(foundCulture);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCulture = async (req, res) => {
  try {
    const updatedCulture = await Culture.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCulture) {
      return res.status(404).json({ message: 'Culture non trouvé' });
    }
    res.json(updatedCulture);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCulture = async (req, res) => {
  try {
    const deletedCulture = await Culture.findByIdAndDelete(req.params.id);
    if (!deletedCulture) {
      return res.status(404).json({ message: 'Culture non trouvé' });
    }
    res.json({ message: 'Culture supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
