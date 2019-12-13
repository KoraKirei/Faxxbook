import { Sequelize } from 'sequelize';
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

if(process.env.NODE_ENV !== 'test') {
  sequelize.sync();
}

export default sequelize;