const Sequelize = require('sequelize');
// Database configuration..
const dbName = 'MedSaude';
const dbUser = 'root';
const dbPassword = 'senha123'

const sequelize = new Sequelize(`${dbName}, ${dbUser}, ${dbPassword}`, {
    dialect: 'mysql', 
    host: 'localhost', 
});

module.exports = sequelize; 

