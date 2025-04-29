const mongoose = require('mongoose');
const mediaSchema = mongoose.Schema({
 Media  : String,
 TypeMedia  : String,
 Neutralite  : String ,
 Diffusion  :  String,
 Fondation  :  String,
 Contenu  :  String,
 Specialite  : String,
img : String,
Standard : Number,
Fax :Number,
Mail :String,
Reseaux : String,
Adresse :  String,
Site : String,
DateBouclage : String,
Ondes  : String,
Zone  : String,
Coordonnees : String,
Fondateur:  String,
Redacteur : String,
Assistant  :  String,
ChefDeRubriqueSport :  String,
ChefDeRubriqueEconomie :  String,
ChefDeRubriqueCulture  :  String,
ChefDeRubriqueNation  :  String,
ChefDeRubriqueInternational: String,
Tirage   :  Number,
Distribution   :  String,
Audience   :  String,
TarifsPublicitaires   :  String,
Contact   :  String,
Autre  :  String,
});

const media = mongoose.model('Media', mediaSchema);

module.exports = media;
