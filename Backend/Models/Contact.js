const mongoose = require('mongoose');
const contactSchema = mongoose.Schema({
AdresseBureau :  String,
Direct : BigInt,
Standard : BigInt,
Fax :BigInt,
Portable : BigInt,
Présence : String,
Domicile : BigInt,
Mail :String,
Réseaux : String,
SkypeViber : String,
Site : String,
});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;
