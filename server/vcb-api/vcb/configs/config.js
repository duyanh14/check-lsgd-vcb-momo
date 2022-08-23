var captcha_service = 'azcaptcha'
var captcha_key = 'djiktpga5az3fqotxmjkizerun4v9bwf'

module.exports = {
    port: 9898,
    db_port: 3306,
    db_host: 'vcb-server-db',
    db_user: 'root', // ten user
    db_password: 'matkhaumysql', // mat khau 
    db_database: 'vcb', //ten database
    timeZone: 'Asia/Ho_Chi_Minh',
    numberMinute2ScanPaymentWhenInsertNewPayment: 10,
    bankLimit: 0,
    detect_ip: false,
    access_ip: ["0.0.0.0"],
    captcha_service: captcha_service, // azcaptcha, deathbycaptcha, twocaptcha, anticaptcha
    captcha_key: [captcha_key], //key captcha
    lengthInPage: 10
}
