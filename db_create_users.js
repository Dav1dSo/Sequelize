const CreateUser = require('./db_table_users');

const CreateUser = await Usuario.create({
    nome: 'Teste1',
    cpf: 11122233344,
    data_nascimento: '2022-10-20',
    genero: 'Masculino',
    emai: 'teste123@gmail.com', 
    dd: 83,  
    telefone: 912345678,
    password: '@senha123'
});

module.exports = CreateUser;
