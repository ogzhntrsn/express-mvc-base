const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = require('../db')

class User extends Model {}
User.init({
  name: DataTypes.STRING,
  email: DataTypes.DATE
}, { sequelize, modelName: 'user' })

module.exports = User

