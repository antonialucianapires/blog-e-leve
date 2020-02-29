const express = require('express');
const router = express.Router();
const slugify = require('slugify');
const Category = require('./Category');

//todas as categorias
router.get('/categories', (req, res) => {
    res.send('rota de categoria')
});

//Create
router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});

//save category
router.post('/categories/save', (req, res) => {
    var title = req.body.title;
    if( title != undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(()=>{
            res.redirect('/admin/categories');
        })
    } else {
        res.redirect('/admin/categories/new');
    }
});

//Read
router.get('/admin/categories', (req,res) => {

    Category.findAll().then(categories => {
        res.render('admin/categories/index', 
        {categories: categories})
    });
});

//Delete
router.post('/categories/delete', (req, res) => {
    var id = req.body.id;
    if(id != undefined) {
        
        if(!isNaN(id)) {

            Category.destroy({
                where: {
                    id: id
                }
            }).then(()=> {
                res.redirect('/admin/categories');
            })

        } else { 
            res.redirect('/admin/categories');
        }
    }else { 
        res.redirect('/admin/categories')
    }
});

module.exports = router;