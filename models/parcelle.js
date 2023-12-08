const mongoose = require('mongoose');

// Création du schéma avec des validateurs
const parcelleSchema = new mongoose.Schema({
  
  nom: {
    type: String,
    required:true,
   
  },
  superficie: {
    type: Number,
    required:true,
    
  },
  ville: {
    type: String,
    required:true,
    
  },
  coordonner: {
    type: String,
    required:true,
    
  },
  typeSol: {
    type: String,
    required:true,
    
  },
  statue: {
    type: String,
    required:true,
    
  },
  ressource: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ressource'
  }],
  
  culture: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Culture'
  }],
  
  
});

// Création du modèle basé sur le schéma
const Parcelle = mongoose.model('Parcelle', parcelleSchema);

module.exports = Parcelle;