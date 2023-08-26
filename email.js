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

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "*********@gmail.com",
    pass: "**************",
  },
});

// verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const main = async (messageOptions) => {
  const info = await transporter.sendMail(messageOptions);

  console.log("Message sent: %s", info.messageId);
};

const messageOptions = {
  from: '"Tekendra Singh"<nabinm784@gmail.com>', // sender address
  to: "singhrijan44@gmail.com", // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: "<b>Hello Dhoti Whats up?</b>", // html body
};

main(messageOptions).catch(console.error);
