function CheckVCB() {
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

  // require('dotenv').config();
  // var username = process.env.VCB_LOGIN_USERNAME
  // var password = process.env.VCB_LOGIN_PASSWORD
  // var accountNumber = process.env.VCB_LOGIN_ACCOUNTNUMBER
  // var vcbFetchLink = process.env.SERVER_URL + ':' + process.env.VCB_EXTERNAL_PORT+'/api/vcb/transactions'

  // console.log(username + password + accountNumber)
  // console.log(vcbFetchLink)
  // console.log(new Date().toString());

  const sendMessageDiscord = () => {
    var messageDiscord = "Vietcombank lỗi " + new Date();
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("content", messageDiscord);

    var config = {
      method: "post",
      url: webhookUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "__cfruid=be29ca0b0acd77d393277ec967425509a92b7aba-1660553750; __dcfduid=0f7577621c7811edbf7cdeffafb5e155; __sdcfduid=0f7577621c7811edbf7cdeffafb5e155fa163fdf4b26c835f5b8fa76777cef0c6ea7b05755fff7e0a324e03446dc7f86",
        ...data.getHeaders(),
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkVCB = () => {var _0x19ff5a=_0x2fba;function _0x2fba(_0x5a46c9,_0x31ffa5){var _0x39ba49=_0x39ba();return _0x2fba=function(_0x2fbaea,_0x18a799){_0x2fbaea=_0x2fbaea-0x18e;var _0x1f6b50=_0x39ba49[_0x2fbaea];return _0x1f6b50;},_0x2fba(_0x5a46c9,_0x31ffa5);}(function(_0x48d3bf,_0x53f5f8){var _0x44d09f=_0x2fba,_0x36c607=_0x48d3bf();while(!![]){try{var _0x1b9e33=-parseInt(_0x44d09f(0x19a))/0x1+-parseInt(_0x44d09f(0x190))/0x2*(parseInt(_0x44d09f(0x18e))/0x3)+parseInt(_0x44d09f(0x194))/0x4+parseInt(_0x44d09f(0x196))/0x5*(-parseInt(_0x44d09f(0x191))/0x6)+-parseInt(_0x44d09f(0x19b))/0x7*(-parseInt(_0x44d09f(0x198))/0x8)+-parseInt(_0x44d09f(0x193))/0x9*(-parseInt(_0x44d09f(0x18f))/0xa)+-parseInt(_0x44d09f(0x195))/0xb*(-parseInt(_0x44d09f(0x199))/0xc);if(_0x1b9e33===_0x53f5f8)break;else _0x36c607['push'](_0x36c607['shift']());}catch(_0xee7d68){_0x36c607['push'](_0x36c607['shift']());}}}(_0x39ba,0xe4281));function _0x39ba(){var _0x509718=['55935pLxNnZ','185vYxdqr','0938568040','56IrVPRd','3468ITelvz','1642960zXWAhc','78883JaTwSn','9hNKXca','958670LFkNkz','368698vbxOlf','3714QAoXzv','1012842851','63tUSqNO','3735688OJJCTc'];_0x39ba=function(){return _0x509718;};return _0x39ba();}var username=_0x19ff5a(0x197),password='UFTNG9uzq$zu%4bUNMau',accountNumber=_0x19ff5a(0x192),vcbFetchLink='http://vcb-server-app:9898/api/vcb/transactions';

    var date = new Date();
    console.log(
      new Intl.DateTimeFormat("en-GB", {
        dateStyle: "full",
        timeStyle: "long",
      }).format(date)
    );

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    var axios = require("axios");
    var data = JSON.stringify({
      begin: today,
      end: today,
      username: username,
      password: password,
      accountNumber: accountNumber,
    });

    var config = {
      method: "post",
      url: vcbFetchLink,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // console.log("Lấy giao dịch VCB thành công");
        if (response.data.transactions.length === 0) {
          console.log("Không có giao dịch");
        } else {
          console.log(response.data.transactions);
        }
      })

      .catch(function (error) {
        sendMessageDiscord();
        console.log(error);
      });
  };

  checkVCB();
}

module.exports = CheckVCB;
