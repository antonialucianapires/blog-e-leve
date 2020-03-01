const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');

//todos os artigos
router.get('/articles', (req, res) => {
    res.send('rota de artigos')
});

//novo artigo
router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories})
    })
    
});

module.exports = router;