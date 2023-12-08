const mongoose = require('mongoose');

// Création du schéma avec des validateurs
const articleSchema = new mongoose.Schema({
  
  description: {
    type: String,
    required:true,
   
  },
  titre: {
    type: String,
    required:true,
   
  },
  date: {
    type: Date,
    required:true,
    
  },
  commentaire: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Commentaire'
  }],
  
});

// Création du modèle basé sur le schéma
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
