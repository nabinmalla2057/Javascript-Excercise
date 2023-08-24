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
