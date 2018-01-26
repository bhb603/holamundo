const config = require('./config');
const pino = require('pino');

const logger = pino({
  level: config.log.level,
  prettyPrint: config.log.prettyPrint,
});

module.exports = logger;
