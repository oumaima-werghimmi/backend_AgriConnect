const mongoose = require('mongoose');

// Création du schéma avec des validateurs
const cultureSchema = new mongoose.Schema({
  
  nom: {
    type: String,
    required:true,
   
  },
  methode: {
    type: String,
    required:true,
    
  },
  datePlantation: {
    type: Date,
    required:true,
    
  },
  dateRecolte: {
    type: Date,
    required:true,
    
  },
  rendement: {
    type: Number,
    required:true,
    
  },

  cout: {
    type: Number,
    required:true,
    
  }
});

// Création du modèle basé sur le schéma
const Culture = mongoose.model('Culture', cultureSchema);

module.exports = Culture;