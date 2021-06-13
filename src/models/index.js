import Sequelize from 'sequelize'
import allConfigs from '../config/sequelize'

import UsersModel from './users'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Users = UsersModel(connection, Sequelize)

export default {
  Users,
  Sequelize,
}
