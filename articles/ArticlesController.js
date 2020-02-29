const express = require('express');
const router = express.Router();

//todos os artigos
router.get('/articles', (req, res) => {
    res.send('rota de artigos')
});

//novo artigo
router.get('/admin/articles/new', (req, res) => {
    res.send('rota de novo artigo')
});

module.exports = router;