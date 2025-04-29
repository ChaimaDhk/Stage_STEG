const mongoose = require('mongoose');
const retombeSchema = mongoose.Schema({
Periode : String,
Date : String,
TypeMedia: String,
Media: String,
Langue : String,
Titre: String,
Signature: String,
RedacteurAnimateur: String,
Themes : String,
Unit: String,
Tendance : String,
Lien: String,
donnerAnnotations : String,
Travail : String,
LienOutput: String
});

const retombe = mongoose.model('Retombe', retombeSchema);

module.exports = retombe;
