var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email: {
        required: true,
        type: String,
        trim: true,
        minlength: 6
    }
});

module.exports = {User}