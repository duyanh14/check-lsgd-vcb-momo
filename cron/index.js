const cron = require('node-cron');
var CheckVCB = require('./checkVCB');
// var MOMOcron = require('./MOMOcron');

cron.schedule('*/3 * * * *', () => {
    //Run every 4 minutes, between 06:00 AM and 07:59 PM
    CheckVCB();
    console.log(new Date().toString())
    // sendMessageDiscord()
})
