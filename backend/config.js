const dotenv = require('dotenv');
dotenv.config({path:__dirname+'\\.env'});

module.exports = {
    port: process.env.PORT
};