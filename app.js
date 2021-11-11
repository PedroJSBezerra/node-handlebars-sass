const express = require('express')
const handlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname+'/public'))

app.get('/', (req,res)=>{
  res.render('home')
})

const PORT = 3008
app.listen(PORT)