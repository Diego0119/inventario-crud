const Sequelize = require('sequelize');
require('dotenv').config();


// configurar conexion a la base de datos

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    define: {
        timestamps: false,
    }
});

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion exitosa")
    } catch (error) {
        console.error('No se pudo conectar a la base de datos', error);
    }
}

module.exports = sequelize;