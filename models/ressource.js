const mongoose = require('mongoose');
const ressourceScheme =  new mongoose.Schema(
    {
        nom:{
            type:String,
            required : true
        },
        typeRessource:{
            type:String,
            required : true
        },
        quantiteDispo:{
            type:Number,
        },
        coutUnitaire:{
            type:Number,
            required : true
        },
       

    }
);
const Ressource = mongoose.model('Ressource', ressourceScheme);

module.exports = Ressource;