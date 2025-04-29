const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
Nom :  String,
Prenom : String,
email : String,
password :String,
confirm:String,
role: String,
img:String
});

const users = mongoose.model('Users', usersSchema);

module.exports = users;
