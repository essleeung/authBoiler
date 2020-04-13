//required node modules
let express = require('express')
let layouts = require('express-ejs-layouts')

//create an app instance
let app = express()

//set template lang to EJS
app.set('view engine', 'ejs')

//tell express to use layouts module
app.use(layouts)

//setup static folder
app.use(express.static('static'))

//create a wild card (catch-all)
app.get('*', (req,res) => {
    res.render('error')
})

//port to listen on
app.listen(3000)