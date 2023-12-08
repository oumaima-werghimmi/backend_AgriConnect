const mongoose = require('mongoose');

// Création du schéma avec des validateurs
const lecteurSchema = new mongoose.Schema({
  
  nom: {
    type: String,
    required:true,
   
  },
  prenom: {
    type: String,
    required:true,
  },

  commentaire: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commentaire'
  }],
  
});

// Création du modèle basé sur le schéma
const Lecteur = mongoose.model('Lecteur', lecteurSchema);

module.exports = Lecteur;
