const express = require('express');
const router = express.Router();

//todas as categorias
router.get('/categories', (req, res) => {
    res.send('rota de categoria')
});

//nova categoria
router.get('/admin/categories/new', (req, res) => {
    res.send('rota da nova categoria')
});

module.exports = router;