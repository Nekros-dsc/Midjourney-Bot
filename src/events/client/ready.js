const client = require('../../../index');
const colors = require('colors');

module.exports = {
    name: "ready"
};

client.once('ready', async () => {
    console.log("----------------------------------------".white);
    console.log(`[READY] ${client.user.tag} est prêt.`.bold)
    console.log("----------------------------------------".white);
})


