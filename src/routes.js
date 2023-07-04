const express = require('express');
const router = express.Router();
const CarroController = require('./controllers/CarroControler')




router.get('/carros', CarroController.buscarTodos);

router.get('/carro/:codigo', CarroController.buscarUm);

router.post('/carro', CarroController.inserir);





module.exports = router;