const nodemailer = require('nodemailer');

module.exports = (robot) => {
  robot.hear(/email (.*)/i, (res) => {
    let name = res.match[1];
    if (name == 'yoga') {
      sendEmail('yoga.m@gaeaglobal.com', res);
    } else if (name == 'HR') {
        //send email to HR
        res.reply("Email has been sent successfully to HR");
    } 
  });
}

   let sendEmail = (emailId, res) => {
    try {
      createTransporter().sendMail(createMailoptions(emailId), (err, info) => {
        if (err) {
          console.log('thrown error. ' + err);
        } else {
          res.reply("Email has been sent successfully to " + emailId);
        }
      });
    } catch (exception) {
      console.log(exception);
    }
   }

    let createTransporter = () => {
      return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'noreplyexto@gmail.com',
          pass: 'exto@123'
        }
      });
    };
    
    let createMailoptions = (emailId) => {
      return {
        from: '"EXTO360°"<noreplyexto@gmail.com>',
        to: emailId,
        subject: 'Welcome to EXTO360°',
        text: 'This is test email'
      }
    };
