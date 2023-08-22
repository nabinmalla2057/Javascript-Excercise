// Write a nodejs application to convert the currency from one currency to another using package: currency-converter-lt

//Generate QR Code for  the url on the terminal using package qrcode.

const QRCode = require("qrcode");
QRCode.toString("jawaan is now on!", { type: "terminal" }, function (err, url) {
  console.log(url);
});
