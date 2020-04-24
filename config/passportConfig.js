//Require environment
require('dotenv').config()

//require node modules
let passport = require('passport')

//require any strategies (aka types of auth we want to use)
let LocalStrategy = require('passport-local').Strategy

//import reference to db
let db = require('../models')

//serialization and de-serialization functions
//These are for passport to use in order to store/lookup the user info 
//SERIALIZE: reduce a user object to just its id field
passport.serializeUser((user, done) => {
    //call the callback function with the userid as an argument 
    //done(error, id) - pass a null if no error
    done(null, user.id)
})

//DESERIALIZE: Reverse the process of the serialize function
//In other words, take a user's ID and return the full user object
passport.deserializeUser((id, done) => {
    db.user.findByPk(id)
    .then(user => {
        done(null,user)
    })
    .catch(done)
})

//LOCAL STRATEGY: Using a database that we manage ourselives (notOAuth)
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, done) => {
    //Try looking up the user by their email 
    db.user.findOne({
        where: { email: email }
    })
    .then(foundUser => {
        //Check if there is a user, also if yes, then check the password
        if (foundUser && foundUser.validPassword(password)) {
            //GOOD - user exists and password is correct
            done(null, foundUser)
        }
        else {
            //BAD- user doesn't exist OR had bad password
            done(null, null)
        }
    })
    .catch(done)
}))

//Make sure we can include this file into other files
module.exports = passport