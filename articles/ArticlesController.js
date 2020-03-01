const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');


router.get('/admin/articles', (req, res) => {
    Article.findAll({
        include: [{model: Category}]
    }).then(articles => {
        res.render('admin/articles/index', {articles: articles})
    })
    
});


router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories})
    })
    
});

router.post('/articles/save', (req, res) => {
  var titulo = req.body.titulo;
  var body = req.body.body;
  var author = req.body.author;
  var category = req.body.category;

  Article.create({
      titulo: titulo,
      slug: slugify(titulo),
      body: body,
      author: author,
      categoryId: category
  }).then(() => {
    res.redirect('/admin/articles');
  })
});

module.exports = router;