//Node modules & Variables
let router = require('express').Router()

//Routes
router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.post('/login', (req,res) => {
    console.log('DATA', req.body)
    res.send('hello from the post route!')
})

router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

//Export (all me to include this in other pages)
module.exports = router
