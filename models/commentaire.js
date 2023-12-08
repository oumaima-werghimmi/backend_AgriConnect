const mongoose = require('mongoose');

// Création du schéma avec des validateurs
const commentaireSchema = new mongoose.Schema({
  
  contenu: {
    type: String,
    required:true,
   
  },
  
});

// Création du modèle basé sur le schéma
const Commentaire = mongoose.model('Commentaire', commentaireSchema);

module.exports = Commentaire;
