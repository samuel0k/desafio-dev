const app = require('./app')
const Sequelize = require('sequelize')

const conn = new Sequelize('database', 'postgres', 'postgres', {
    port: 15432,
    host: 'localhost',
    dialect: 'postgres' 
});

require('dotenv').config()


app.listen(process.env.PORT || 4000)