require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors= require('cors');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');





const app = express();
app.use(express.json());
app.use(cors());

const options = {
  swaggerDefinition: {
    info: {
      title: 'AgricoGest API',
      version: '1.0.0',
      description: 'Documentation for AgricoGest API',
    },
  },
  apis: ['./routes/culture.js','./routes/parcelle.js',
        './routes/agriculteur.js','./routes/ressource.js',
        './routes/article.js'], // Chemin vers vos fichiers de définition de route
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AgricoGest', {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(err => console.error('Erreur de connexion à MongoDB :', err));


// Models - Import your Mongoose models here
const Article = require("./models/article");
const Agriculteur = require("./models/agriculteur");
const Commentaire = require("./models/commentaire");
const Lecteur = require("./models/lecteur");
const Ressource = require("./models/ressource");
const Parcelle = require("./models/parcelle");
const Culture = require("./models/culture");



// declaration des routes 
const articleRoutes = require("./routes/article");
const agriculteurRoutes = require("./routes/agriculteur");
const commentaireRoutes = require("./routes/commentaire");
const cultureRoutes = require("./routes/culture");
const lecteurRoutes = require("./routes/lecteur");
const parcelleRoutes = require("./routes/parcelle");
const ressourceRoutes = require("./routes/ressource");



//***********path  */

app.use('/article', articleRoutes);
app.use('/agriculteur', agriculteurRoutes);
app.use('/commentaire', commentaireRoutes);
app.use('/culture', cultureRoutes);
app.use('/lecteur', lecteurRoutes);
app.use('/parcelle', parcelleRoutes);
app.use('/ressource', ressourceRoutes);






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});