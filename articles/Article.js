const Sequelize = require('sequelize');
const connection = require('../database/database');

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
    }
});

module.exports = Article;