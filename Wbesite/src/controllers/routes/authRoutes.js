


const express = require ('express');
const authController = require('./authControllers');
const router = express.Router();  

router.post('/registar/usuario',authController.registrar)

module.exports =router;