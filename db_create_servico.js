const CreateServico = require('./db_table_servicos');

const CreateServico = await Servico.create({
    tipo_servico: 'Neurológico',
    data_agendamento: '2022-10-20',
    status: 'Esperando',
});

module.exports = CreateServico;