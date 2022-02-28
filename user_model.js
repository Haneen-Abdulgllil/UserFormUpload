


var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/users');

const userSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: [true, 'User Must Have Full Name'],
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    cv: {
        type: String,
        required: true,
    },


});


var User = db.model('User', userSchema);

module.exports = User;