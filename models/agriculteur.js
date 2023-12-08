const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Création du schéma avec des validateurs
const agriculteurSchema = new mongoose.Schema({
  
  nom: {
    type: String,
    required:true,
   
  },
  prenom: {
    type: String,
    required:true,
   
  },
  mail: {
    type: String,
    required:true,
   
  },
  pwd: {
    type: String,
    required:true,
   
  },
  parcelle: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parcelle'
  }],

  article: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article'
  }],

  authTokens: [{
    authToken: {
      type: String,
      required: true
    }
  }]
  
});

// Méthode pour générer un jeton d'authentification et le sauvegarder
agriculteurSchema.methods.generateAuthTokenAndSaveAgriculteur = async function () {
  const authToken = jwt.sign({ _id: this._id.toString() }, 'foo');
  this.authTokens.push({ authToken });
  await this.save();
  return authToken;
};

// Méthode statique pour trouver un utilisateur par e-mail et mot de passe
agriculteurSchema.statics.findUser = async (mail, pwd) => {
  const agriculteur = await Agriculteur.findOne({ mail });
  if (!agriculteur) throw new Error('Erreur, impossible de se connecter !');
  const isPasswordValid = await bcrypt.compare(pwd, agriculteur.pwd);
  if (!isPasswordValid) throw new Error('Erreur, impossible de se connecter !');
  return agriculteur;
};

// Middleware pour hacher le mot de passe avant de le sauvegarder
agriculteurSchema.pre('save', async function () {
  if (this.isModified('pwd')) this.pwd = await bcrypt.hash(this.pwd, 8);
});

// Création du modèle basé sur le schéma
const Agriculteur = mongoose.model('Agriculteur', agriculteurSchema);

module.exports = Agriculteur;
