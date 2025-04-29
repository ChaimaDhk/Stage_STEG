const mongoose = require('mongoose');
const cadeauSchema = mongoose.Schema({
cadeaux: String,
Types :  String,
Occasion :  String,
});

const cadeau = mongoose.model('Cadeau', cadeauSchema);

module.exports = cadeau;
