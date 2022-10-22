
// Verifica a coerência entre as tabelas do arquivo db_users.js com o banco informado em db_config.
//Cria as tabelas com campos especificados.

(async () => {
    const database = require('./db_config');
    await database.sync();
}) ();


