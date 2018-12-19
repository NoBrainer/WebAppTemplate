let defaultConfig = {
    env: 'dev',
    port: 3000
};

let config;
try {
    config = require('../../webappConfig');
} catch(e1) {
    try {
        config = require('../config');
    } catch(e2) {
        config = defaultConfig;
    }
}

module.exports = config;