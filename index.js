var nodemailer= require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: 
        {
            user: 'swappy.test@gmail.com',
            pass: 'swappytest'
        }
    }
);

var mailOptions = {
    from: 'Awesome@gmail.com',
    to: 'swappy208@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});