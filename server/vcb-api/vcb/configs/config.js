module.exports = {
    port: 9898,
    db_port: 3306,
    db_host: 'vcb-api-db',
    db_user: 'root', // ten user
    db_password: 'matkhaumysql', // mat khau 
    db_database: 'vcb', //ten database
    timeZone: 'Asia/Ho_Chi_Minh',
    numberMinute2ScanPaymentWhenInsertNewPayment: 10,
    bankLimit: 0,
    detect_ip: false,
    access_ip: ["0.0.0.0"],
    captcha_service: 'azcaptcha', // azcaptcha, deathbycaptcha, twocaptcha, anticaptcha
    captcha_key: ['zwp0trqqgmoeghifeziuuthyajws2bxy'], //key captcha
    lengthInPage: 10
}
