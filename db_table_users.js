const Sequelise = require('sequelize');

const database = require('./db_config');

// Table Usuarios...
const Usuarios = database.define('Usuario', {
    id: {
        type: Sequelise.INTEGER, 
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        Acesso: Sequelize.ENUM('Usuário', 'Administrador'),
    },

    nome: {
        type: Sequelise.STRING,
        allowNull: false,
    }, 

    cpf: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
    },

    data_nascimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    genero: {
        type: Sequelize.ENUM('Masculino', 'Feminino'),
        allowNull: false,
    }, 

    email: {
        type: Sequelize.CHAR(18),
        allowNull: false,
    },

    dd: {
        cod_area: Sequelize.INTEGER(2),
    },

    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 

    password: {
        type: Sequelize.CHAR(10),
        allowNull: false,
    },

});


module.exports = Usuarios;