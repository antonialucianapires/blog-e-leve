const express = require('express');
const app = express();
const  bodyParser = require('body-parser');
const connection = require('./database/database')

const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

//models
const Article = require('./articles/Article');
const Category = require('./categories/Category')

//view engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log('Conexão DB com sucesso!')
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req, res) => {
    Article.findAll({
        order:[
            ['id', 'DESC']
        ]
    }).then(articles => {

        Category.findAll().then(categories => {
            res.render('index', {articles: articles, categories: categories})
        });
    });
});

app.get('/:slug', (req, res) => {
    var slug = req.params.slug;

    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined) {
            res.render('article', {article: article})
        } else {
           res.redirect('/'); 
        }
    }).catch( err => {
        res.redirect('/')
    })
});

app.get('/category/:slug', (req, res) => {
    var slug = req.params.slug;

    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if(category != undefined) {
        Category.findAll().then(categories => {
            res.render('index', {articles: categories.articles, categories: categories})
        })
        }else{
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.listen(3000, (req, res) => {
    console.log('servidor rodando')
});