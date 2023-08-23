const fs = require("fs");
const qrcode = require("qrcode");

const text = "jawaan is now on!";

qrcode.toFile(
  "qrcode.png",
  text,
  {
    color: {
      dark: "#000", // Dark color of the QR code
      light: "#fff", // Light color of the QR code background
    },
  },
  (err) => {
    if (err) {
      console.error("Error generating QR code:", err);
    } else {
      console.log("QR code generated and saved as qrcode.png");
    }
  }
);
