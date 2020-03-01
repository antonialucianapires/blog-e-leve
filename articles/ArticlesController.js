const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('./Article');
const slugify = require('slugify');


router.get('/articles', (req, res) => {
    res.send('rota de artigos')
});


router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', {categories: categories})
    })
    
});

router.post('/articles/save', (req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  var author = req.body.author;
  var category = req.body.category;

  Article.create({
      title: title,
      slug: slugify(title),
      body: body,
      author: author,
      categoryId: category
  }).then(() => {
    res.redirect('/admin/articles');
  })
});

module.exports = router;