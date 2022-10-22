// Table Servicos
const database = require('./db_config');
const Sequelize = require('sequelize')

const Servicos = database.define('Servico', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    
    tipo_servico: {
        type: Sequelize.ENUM('Neurológico', 'Gastro intestinal', 'Odontológico', 'Oftalmologia','Endocrinológista','Pneumatologia', 'Patológico'),
        allowNull: false,
    }, 

    data_agendamento: {
        type: Sequelize.DATE, 
        allowNull: false,  
    }, 

    status: {
        type: Sequelize.ENUM('Realizado', 'Cancelado', 'Esperando'),
        allowNull: false,
    }

});

module.exports = Servicos;