const fkill = require('fkill');
const config = require('./getConfig');

fkill(':'+config.port, { force: true })
    .then(() => {
        console.log("Killed process on port " + config.port);
    })
    .catch(() => {
        console.log("Failed to kill process on port " + config.port);
    });