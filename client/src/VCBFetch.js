import moment from "moment";
import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { Nav } from "react-bootstrap";

// var username = process.env.REACT_APP_VCB_LOGIN_USERNAME
// var password = process.env.REACT_APP_VCB_LOGIN_PASSWORD
// var accountNumber = process.env.REACT_APP_VCB_LOGIN_ACCOUNTNUMBER
// var vcbFetchLink = process.env.REACT_APP_SERVER_URL + ':' + process.env.REACT_APP_VCB_EXTERNAL_PORT+'/api/vcb/transactions'

//103.130.219.9

//encode username + password + accountNumber + vcbFetchLink
function _0xed6b(_0x15735e, _0xe10722) {
  var _0x58da03 = _0x58da();
  return (
    (_0xed6b = function (_0xed6b3, _0x305f9f) {
      _0xed6b3 = _0xed6b3 - 0x16e;
      var _0x537bf3 = _0x58da03[_0xed6b3];
      return _0x537bf3;
    }),
    _0xed6b(_0x15735e, _0xe10722)
  );
}
function _0x58da() {
  var _0x511756 = [
    "74318yjNwQY",
    "8937585nYzhrC",
    "10483314FmwIfV",
    "4774994CORUFU",
    "4ANJThJ",
    "1012842851",
    "9DXFrZF",
    "602141FehLpc",
    "0938568040",
    "7755065CDBkdQ",
    "http://103.130.219.9:4000/api/vcb/transactions",
    "40873490xwPhPs",
    "UFTNG9uzq$zu%4bUNMau",
    "8wShGyR",
  ];
  _0x58da = function () {
    return _0x511756;
  };
  return _0x58da();
}
var _0x4b79f9 = _0xed6b;
(function (_0x11c438, _0x256ed1) {
  var _0x214e9e = _0xed6b,
    _0x542f47 = _0x11c438();
  while (!![]) {
    try {
      var _0x13187f =
        parseInt(_0x214e9e(0x170)) / 0x1 +
        (-parseInt(_0x214e9e(0x177)) / 0x2) *
          (parseInt(_0x214e9e(0x16f)) / 0x3) +
        (-parseInt(_0x214e9e(0x17b)) / 0x4) *
          (parseInt(_0x214e9e(0x172)) / 0x5) +
        -parseInt(_0x214e9e(0x179)) / 0x6 +
        (-parseInt(_0x214e9e(0x17a)) / 0x7) *
          (-parseInt(_0x214e9e(0x176)) / 0x8) +
        -parseInt(_0x214e9e(0x178)) / 0x9 +
        parseInt(_0x214e9e(0x174)) / 0xa;
      if (_0x13187f === _0x256ed1) break;
      else _0x542f47["push"](_0x542f47["shift"]());
    } catch (_0x507376) {
      _0x542f47["push"](_0x542f47["shift"]());
    }
  }
})(_0x58da, 0xec89a);
var username = _0x4b79f9(0x171),
  password = _0x4b79f9(0x175),
  accountNumber = _0x4b79f9(0x16e),
  vcbFetchLink = _0x4b79f9(0x173);

//get today
var today = () => moment().format("DD/MM/YYYY");
var begin = () => moment().subtract(14, "days").format("DD/MM/YYYY");

export default function Transactions() {
  const [loading, setLoading] = useState(false);
  const [server01Data, setServer01Data] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch(vcbFetchLink, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          begin: begin(),
          end: today(),
          username: username,
          password: password,
          accountNumber: accountNumber,
        }),
      });
      const { transactions } = await response.json();
      setServer01Data(transactions);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container className="mt-5">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            <Link to="/VCBFetch" className="mb-2 btn btn-success disabled">
              Xem chuyển khoản Vietcombank
            </Link>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Link to="/MOMOFetch" className="mb-2 btn btn-danger">
              Xem chuyển khoản MOMO
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        {loading && (
          <p style={{ fontSize: "4rem" }}>Đợi xíu, đang tải giao dịch...</p>
        )}
        {!loading &&
          server01Data.map((data, k) => {
            if (data.CD === "+") {
              //handle PCTime
              function zeroPad(num) {
                return num.toString().padStart(6, "0");
              }
              var validDate = moment(data.TransactionDate, "DD/MM/YYYY").format(
                "DD/MM/YYYY"
              );
              var validTime = moment(zeroPad(data.PCTime), "HH:mm:ss").format(
                "HH:mm:ss"
              );
              var validFullDateTime = moment(
                validDate + " " + validTime,
                "DD/MM/YYYY HH:mm:ss"
              );
              var validFullDateTimeString = validFullDateTime.format(
                "🗓️ddd, DD/MM/YYYY ⏰HH:mm:ss"
              );
              var momentFromNow = validFullDateTime.fromNow();

              //translate minutes ago...
              const momentFromNowTranslate = (moment) => {
                if (moment.includes("a few seconds ago") === true) {
                  return "vài giây trước";
                } else if (moment.includes("seconds ago") === true) {
                  return moment.replace("seconds ago", "giây trước");
                } else if (moment.includes("1 minute ago") === true) {
                  return "1 phút trước";
                } else if (moment.includes("minutes ago") === true) {
                  return moment.replace("minutes ago", "phút trước");
                } else if (moment.includes("an hour ago") === true) {
                  return "1 giờ trước";
                } else if (moment.includes("hours ago") === true) {
                  return moment.replace("hours ago", "giờ trước");
                } else if (moment.includes("a day ago") === true) {
                  return "1 ngày trước";
                } else if (moment.includes("days ago") === true) {
                  return moment.replace("days ago", "ngày trước");
                } else if (moment.includes("a month ago") === true) {
                  return moment.replace("a month ago", "1 tháng trước");
                } else if (moment.includes("months ago") === true) {
                  return moment.replace("months ago", "tháng trước");
                }
              };

              //translate date
              const translateValidFullDate = (weekday) => {
                if (weekday.includes("Mon")) {
                  return weekday.replace("Mon", "Thứ Hai");
                } else if (weekday.includes("Tue")) {
                  return weekday.replace("Tue", "Thứ Ba");
                } else if (weekday.includes("Wed")) {
                  return weekday.replace("Wed", "Thứ Tư");
                } else if (weekday.includes("Thu")) {
                  return weekday.replace("Thu", "Thứ Năm");
                } else if (weekday.includes("Fri")) {
                  return weekday.replace("Fri", "Thứ Sáu");
                } else if (weekday.includes("Sat")) {
                  return weekday.replace("Sat", "Thứ Bảy");
                } else if (weekday.includes("Sun")) {
                  return weekday.replace("Sun", "Chủ Nhật");
                }
              };

              //print if it's a new transaction
              const checkNewTransaction = (transdate) => {
                if (
                  moment().isBefore(moment(transdate).add(+20, "minutes")) ===
                  true
                ) {
                  // play()
                  return (
                    <Card.Header style={{ fontSize: "2rem" }}>
                      <Badge bg="warning">Mới</Badge>
                    </Card.Header>
                  );
                }
              };

              // function play() {
              //   var audio = new Audio('./public/583950__fenodyrie__bell-ringing-loudly.wav');
              //   audio.play();
              // }

              // console.log(checkNewTransaction(validFullDateTime))

              //print cards
              return (
                <Col key={k} xs={12} md={4} lg={3}>
                  <Card
                    border="success"
                    style={{ width: "20rem", margin: "5px 5px 5px 5px" }}
                  >
                    {checkNewTransaction(validFullDateTime)}
                    <Card.Body>
                      <Badge bg="success">
                        <Card.Text style={{ fontSize: "2rem" }}>
                          Nhận {data.Amount}đ
                        </Card.Text>
                      </Badge>
                      <h4>
                        <Card.Text>
                          <Badge bg="secondary">
                            {momentFromNowTranslate(momentFromNow)}
                          </Badge>
                        </Card.Text>
                      </h4>
                      <Card.Text>
                        {translateValidFullDate(validFullDateTimeString)}
                      </Card.Text>
                      {/* minutes ago comes here */}
                      <Card.Text>{data.Description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
}
