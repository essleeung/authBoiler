// *******************
// NODE MODULES
// *******************

//required node modules
let express = require('express')
let layouts = require('express-ejs-layouts')

//create an app instance
let app = express()

// *******************
// SETTINGS/MIDDLEWARE
// *******************

//set template lang to EJS
app.set('view engine', 'ejs')

//tell express to use layouts module
app.use(layouts)

//setup static folder
app.use(express.static('static'))

//decrypt the variables coming in via POST routes (from forms)
app.use(express.urlencoded({extended: false}))

// *******************
// ROUTES
// *******************
//controllers
app.use('/auth', require('./controllers/auth'))

//create a home page route
app.get('/', (req,res) => {
    res.render('home')
})
//create a wild card (catch-all)
app.get('*', (req,res) => {
    res.render('error')
})

// *******************
// LISTEN
// *******************
//port to listen on
app.listen(3000)