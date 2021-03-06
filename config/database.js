// const conf = require('./conf');
// const str = conf.connStr();
const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DIMA, {
    dialect: 'postgres',
    operatorsAliases: 0,

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
