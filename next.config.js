/* eslint-disable no-undef */
// next.config.js
const withImages = require('next-images');
module.exports = withImages({
  esModule: true,
  env: {
    USER_MONGODB: process.env.USER_MONGODB,
    PASS_MONGODB: process.env.PASS_MONGODB,
    DB_MONGODB: process.env.DB_MONGODB,
  },
});
