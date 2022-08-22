function CheckMOMO() {
// const path = require('path')
// require('dotenv').config({ path: path.resolve(__dirname, '../client/.env') }); 
// const momoUrl = process.env.SERVER_URL + ':' + process.env.MOMO_EXTERNAL_PORT 
const momoUrl = "http://momo-server-app:80"
// var currentTime = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())
// console.log(currentTime)
// console.log(momoUrl)

var _0x41ec62 = _0x35ec;
(function (_0x2e5805, _0x5ba12d) {
  var _0x4411d5 = _0x35ec,
    _0x1a85fe = _0x2e5805();
  while (!![]) {
    try {
      var _0x39c09f =
        -parseInt(_0x4411d5(0x9f)) / 0x1 +
        (-parseInt(_0x4411d5(0xa0)) / 0x2) *
          (-parseInt(_0x4411d5(0xa5)) / 0x3) +
        -parseInt(_0x4411d5(0xa3)) / 0x4 +
        parseInt(_0x4411d5(0xa7)) / 0x5 +
        (-parseInt(_0x4411d5(0xa1)) / 0x6) *
          (-parseInt(_0x4411d5(0x9e)) / 0x7) +
        -parseInt(_0x4411d5(0xa4)) / 0x8 +
        parseInt(_0x4411d5(0xa6)) / 0x9;
      if (_0x39c09f === _0x5ba12d) break;
      else _0x1a85fe["push"](_0x1a85fe["shift"]());
    } catch (_0x3ef9a0) {
      _0x1a85fe["push"](_0x1a85fe["shift"]());
    }
  }
})(_0x44dc, 0x31b05);
function _0x44dc() {
  var _0x7da0b2 = [
    "2749852MEFRvL",
    "79886yPpqhA",
    "20144SSMlcm",
    "6xebmnF",
    "https://discord.com/api/webhooks/1010911250743570502/Ixj4EiWE8-DkNAqulQxNHsIRiB7X5CInCVDnEH_Uzmkh2Hu_CjeeBSrBFDtAmCcQSXnK",
    "657748oWZqjx",
    "2120536GzcLCP",
    "36iTDARp",
    "1233252OxSISC",
    "310935oOGlSB",
  ];
  _0x44dc = function () {
    return _0x7da0b2;
  };
  return _0x44dc();
}
function _0x35ec(_0x4b5b31, _0x11a5fa) {
  var _0x44dc87 = _0x44dc();
  return (
    (_0x35ec = function (_0x35ec0d, _0x4ae045) {
      _0x35ec0d = _0x35ec0d - 0x9e;
      var _0x50390a = _0x44dc87[_0x35ec0d];
      return _0x50390a;
    }),
    _0x35ec(_0x4b5b31, _0x11a5fa)
  );
}
var webhookUrl = _0x41ec62(0xa2);

var messageDiscord = "MOMO lỗi"

const sendMessageDiscord = () => {
  var axios = require('axios');
  var FormData = require('form-data');
  var data = new FormData();
  data.append('content', messageDiscord);
  
  var config = {
    method: 'post',
    url: webhookUrl,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'Cookie': '__cfruid=be29ca0b0acd77d393277ec967425509a92b7aba-1660553750; __dcfduid=0f7577621c7811edbf7cdeffafb5e155; __sdcfduid=0f7577621c7811edbf7cdeffafb5e155fa163fdf4b26c835f5b8fa76777cef0c6ea7b05755fff7e0a324e03446dc7f86', 
      ...data.getHeaders()
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

const getSessionMomo = ()=> {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: momoUrl + '/session.php',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
        if (response.data.message === "Thành công"){
          console.log("Cron momo session thành công")
        } else {
          sendMessageDiscord()
        }
      })
    
    .catch(function (error) {
      console.log(error);
    });

    const getTransactionMomo = ()=> {
      var axios = require('axios');
      var config = {
        method: 'get',
        url: momoUrl + '/transaction.php',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
          console.log("Lấy giao dịch MOMO thành công")
          var allMomoNotification = response.data.message.data.notifications
      //   console.log(JSON.stringify(allMomoNotification));
        for (let i = 0 ; i < allMomoNotification.length ; i++) {
          if (allMomoNotification[i].tranId !== 0) {
              var transactionMillisecond = allMomoNotification[i].time
              var transactionLocaleDate = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(transactionMillisecond)
              var transactionCaption = allMomoNotification[i].caption
              var transactionSender = allMomoNotification[i].sender
              var transactionMessage = transactionCaption + ' số điện thoại ' + transactionSender + ' lúc ' + transactionLocaleDate
              console.log(transactionMessage)
          } 
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    
}



getSessionMomo()
getTransactionMomo()

// cron.schedule('*/30 * * * *', () => {
//   getSessionMomo()
//   var currentTime = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())
//   console.log(currentTime)
//   console.log('running every 30 minutes');
// });

// cron.schedule('*/15 * * * *', () => {
//   getTransactionMomo()
//   var currentTime = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'full', timeStyle: 'long' }).format(new Date())
//   console.log(currentTime)
//   console.log('running every 15 minute');
// });

}

module.exports = CheckMOMO;