/* eslint-disable no-irregular-whitespace */
import dotenv from 'dotenv';

dotenv.config();

export function getEnvVar(name, defaultValue) {
 const value = process.env[name];

 if (value) return value;

 if (defaultValue) return defaultValue;

 throw new Error(`Missing: process.env['${name}'].`);
}

// We can use it, for example,
// in this form: env('PORT', '3000');
// If an environment variable with this name
// was not specified and a default value was not passed,
// then calling this function will throw an error
// with the message Missing: process.env['PORT'].
