import knex from "knex";

const dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'contra123',
    database: 'myfisrtsql'
}

const knexConfig = {
    client: 'mysql',
    connection: dbConfig
}

const cliente = knex(knexConfig);

knex.shema.createTable('personas', (table) =>{
    table.incrementals('id'),
    table.string('nombre'),
    table.integer('edad')
})   

    .then(()=>{
        console.log('tabla "personas" creada!');
    })
    .finally(()=>{
        knex.destroy()
    })