const Sequelize = require('sequelize');

const connection = new Sequelize(
    {
        username: 'eleve-root',
        password: 'recode2020',
        database: 'blog-e-leve',
        host: 'mysql669.umbler.com',
        port: '41890',
        dialect: 'mysql',
    }
);

module.exports = connection;