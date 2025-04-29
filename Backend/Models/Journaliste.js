const mongoose = require('mongoose');
const journalisteSchema = mongoose.Schema({
Situation : String,
NomPrenom : String,
Anniversaire : String ,
Medias :  String,
Support :  String,
Service :  String,
Qualification : String,
Specialite :  String,
Rubrique :  String,
Formation : String,
img : String,
Adresse :  String,
Direct : Number,
Standard : Number,
Fax :Number,
Portable : Number,
Presence : String,
Domicile : Number,
Mail :String,
Reseaux : String,
SkypeViber : String,
Site : String,
Appreciation: String,
Couvertures:  String,
cadeaux: String,
Types :  String,
Occasion :  String,
InfoDrives: String
});

const journaliste = mongoose.model('Journaliste', journalisteSchema);

module.exports = journaliste;
