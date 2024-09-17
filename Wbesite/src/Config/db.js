const postgres = require('postgres');
const dotenv = require('dotenv');

dotenv.config();

const sql = postgres({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 5432 // Puerto por defecto
});

// Verifica la conexión
sql`
    SELECT NOW() AS now
`.then(result => {
    console.log('Conectado a la base de datos');
}).catch(err => {
    console.error('Error al conectar a la base de datos', err);
});

module.exports = sql;