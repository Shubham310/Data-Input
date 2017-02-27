var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


router.get('/register', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

router.get('/name', function(req, res){
    User.find({},function(err, user){
        if(err) throw err;
        res.sendFile(__dirname + '/name.html');
        console.log('success');

    });
});

router.post('/register',function(req,res){
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var age = req.body.age;
    var gender = req.body.gender;
    var phone = req.body.phone;
    var information = req.body.information;

   /* req.checkBody('firstname', 'firstname is required').notEmpty();
    req.checkBody('age', 'age is required').notEmpty();
    req.checkBody('phone', 'phone is required').notEmpty();


    var errors = req.validationErrors();

    if(errors){
        console.log('cannot post');
        res.sendFile(__dirname + '/index.html',{
            errors: errrors
        });
    }else{
        */
        var newUser = new User({
            firstname:firstname,
            lastname:lastname,
            age:age,
            gender:gender,
            phone:phone,
            information:information
        });
        User.createUser(newUser, function(err,user){
            if(err) throw err;
            console.log(user);
           
        });
    res.redirect('/users/name');

});

module.exports = router;
