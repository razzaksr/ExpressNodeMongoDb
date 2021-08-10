require('./models/db')

const express=require('express')
const path=require('path')
const exphand=require('express-handlebars')
const parsers=require('body-parser')
const control=require('./controller/techieController');

const app=express()
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',exphand({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layout/'}))
app.set('view engine','hbs')

app.use(parsers.urlencoded({
    extended:true
}));

app.use(parsers.json());


app.listen(3000,()=>{
    console.log("Server connected")
})

app.use('/techie',control)