var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstname:{type: String, required: true},
    lastname:{type: String},
    age:{type: Number},
    gender:{type: },
    phone:{type: Number},
    information:{type: String}

});

var User = module.exports = mongoose.model('User',UserSchema);

module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}