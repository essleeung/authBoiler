let router = require('express').Router()
let moment = require('moment')
let db = require('../models')
let adminLogin = require('../middleware/adminLogin')
let userLogin = require('../middleware/userLogin')

//Custom middleware that is ONLY applied to the routes in this file.
router.use(userLogin)

//GET /profile/user
//NOTE: protect this route from users who are not logged in
router.get('/user', (req,res) => {
    res.render('profile/user', {moment})
})

//GET /profile/guest/userId
router.get('/guest/:id', (req, res) => {
    db.user.findByPk(req.params.id)
    .then(userProfile => {
        res.render('profile/guest', {moment, userProfile})
    })
    .catch(err => {
        console.log(err)
        res.render('error')
    })
})

//GET /profile/admin - a special profile for admins
// NOTE: protect this route from users who are not logged in and users who are NOT admins
router.get('/admin', adminLogin, (req,res) => {
    db.user.findAll()
    .then(users => {
        res.render('profile/admin', {moment, users})
    })
})

module.exports = router