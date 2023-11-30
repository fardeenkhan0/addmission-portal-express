const express = require('express')
const FrontController = require('../controlers/FrontController')
const route = express.Router()



route.get('/',FrontController.login)//login is method//
route.get('/about',FrontController.about)
route.get('/register',FrontController.register)
route.get('/dashboard',FrontController.dashboard)



module.exports =route