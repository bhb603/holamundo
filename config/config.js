const Joi = require('joi');

// load variables from `.env` file if available
require('dotenv').config();

// define the environment variable schema
const schema = Joi.object({
  NODE_ENV: Joi.string().default('development'),
  LOG_LEVEL: Joi.string().valid(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
  LOG_PRETTY_PRINT: Joi.boolean().default(false),
  PORT: Joi.number().default(3000),
}).unknown();

const {error, value: envVars} = Joi.validate(process.env, schema);

if (error) {
  throw new Error(`Invalid environment variable ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  log: {
    level: envVars.LOG_LEVEL,
    prettyPrint: envVars.LOG_PRETTY_PRINT,
  },
  port: envVars.PORT,
};
