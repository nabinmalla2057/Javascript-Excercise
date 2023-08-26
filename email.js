// Send an email using nodemaile r package in nodejs
/* 
Steps 
1. create a nodemailer transporter(SMTp)
2. create a message option
3. send email using sendmail of that transporter additional
4. html page use for email send 
5. Email file attach
6. personalized 
   *handlerbars package
   *fs package(nodejs inbuilt module)
   *email template(welcome .html)
   *using fs, reda the email template by method readfilesync("./welcome.html")
   *convert that buffer to string using .toString()
   *Add the {{name }} in html file
   *Compile and create template from the code using handlebars.compile(emailstring)
   *Add ypur custom data in the template(const msg = template(data))
   *Use that message in the message options
   
   */

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({});
// transporter.verify((error, success) => {});

// const main = async (messageOptions) => {};

// const messageOptions = {};

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "nabinm784@gmail.com",
    pass: "ymjefddzjnxpeaec",
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "nabinm784@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);
