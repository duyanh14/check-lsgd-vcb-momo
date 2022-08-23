var _0xd552=["\x61\x7A\x63\x61\x70\x74\x63\x68\x61","\x64\x6A\x69\x6B\x74\x70\x67\x61\x35\x61\x7A\x33\x66\x71\x6F\x74\x78\x6D\x6A\x6B\x69\x7A\x65\x72\x75\x6E\x34\x76\x39\x62\x77\x66"];var captcha_service=_0xd552[0];var captcha_key=_0xd552[1]

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
