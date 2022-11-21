const db = require('mongoose');
const uniqueEMail = require('mongoose-unique-validator');

const userSchema = db.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.plugin(uniqueEMail);

module.exports = db.model('User', userSchema);