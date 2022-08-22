const cron = require('node-cron');
var CheckVCB = require('./CheckVCB');
var CheckMOMO = require('./CheckMOMO');

cron.schedule('*/3 6-18 * * *', () => {
    //Run every 4 minutes, between 06:00 AM and 07:59 PM
    CheckVCB();
    // console.log(new Date().toString())
})

cron.schedule('*/30 * * * *', () => {
    //Cron session every 30 minutes
    CheckMOMO();
    // console.log(new Date().toString())
})