const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

//model article
const Article = connection.define('articles', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false 
    }
});

Category.hasMany(Article);
Article.belongsTo(Category);

module.exports = Article;