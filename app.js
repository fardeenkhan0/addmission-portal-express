const express = require('express')
const FrontController = require('./controlers/FrontController')
//console.log(express)
const app = express()
//app.route()
const port = 3000
const web =require('./Routes/web')


// route
//  app.get('/',FrontController.home) //method
//  app.get('/about',FrontController.about)
//  app.get('/team',FrontController.team)
app.use('/',web)



//server create
app.listen(port,()=>{
    //console.log('server start localhost: 3000')
   console.log(`server start localhost:${port}`) //$=templating string
})