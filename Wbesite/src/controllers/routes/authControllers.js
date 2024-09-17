const db = require('../../Config/db');

exports.registrar = (req, res) => {
    const { nombre, precio, productID } = req.body;

    // Consulta SQL corregida para PostgreSQL
    const sql = "INSERT INTO repuestos (nombre, precio, product_id) VALUES ($1, $2, $3)";

    // Ejecuta la consulta
    conexion.query(sql, [nombre, precio, productID], (err, result) => {
        if (err) {
            console.error('Error al registrar el usuario:', err);
            return res.status(500).json('Error al registrar el usuario');
        }
        res.status(200).json('El usuario ha sido registrado');
    });
};
