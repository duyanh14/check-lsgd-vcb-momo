var _0x2996ed=_0x1a56;function _0x1a56(_0x203d55,_0x510d72){var _0x113387=_0x1133();return _0x1a56=function(_0x1a5648,_0x147fed){_0x1a5648=_0x1a5648-0x78;var _0xae0874=_0x113387[_0x1a5648];return _0xae0874;},_0x1a56(_0x203d55,_0x510d72);}function _0x1133(){var _0xdb2be1=['99132hmpyza','azcaptcha','5019340cMoKSi','159560QqTGhp','27WCWqod','348834JPpenq','11pKOsGh','10gKrZfS','161294aiCgko','14eapHli','284792Hypnhl','73005EJhfGH'];_0x1133=function(){return _0xdb2be1;};return _0x1133();}(function(_0x47a80a,_0x49ea78){var _0x5a151=_0x1a56,_0x4a7670=_0x47a80a();while(!![]){try{var _0x21211c=-parseInt(_0x5a151(0x7a))/0x1+-parseInt(_0x5a151(0x81))/0x2+parseInt(_0x5a151(0x7d))/0x3+-parseInt(_0x5a151(0x7e))/0x4*(-parseInt(_0x5a151(0x79))/0x5)+parseInt(_0x5a151(0x83))/0x6*(-parseInt(_0x5a151(0x7b))/0x7)+-parseInt(_0x5a151(0x7c))/0x8*(parseInt(_0x5a151(0x82))/0x9)+-parseInt(_0x5a151(0x80))/0xa*(-parseInt(_0x5a151(0x78))/0xb);if(_0x21211c===_0x49ea78)break;else _0x4a7670['push'](_0x4a7670['shift']());}catch(_0x37c16a){_0x4a7670['push'](_0x4a7670['shift']());}}}(_0x1133,0x1b446));var captcha_service=_0x2996ed(0x7f),captcha_key='djiktpga5az3fqotxmjkizerun4v9bwf';

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
