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

var mylist = ['Hi. You are cute.', 'Hi Cutie. I am thinking of you.', 'Hello. What up?', 'Hi boy.'];

function randomselect(mylist)
{
    var max = mylist.length-1;
    var min = 0;
    var num = Math.floor(Math.random()*(max-min+1));
    console.log(num);
    return mylist[num];
}

setInterval(function() {
    
    var mailOptions = {
        from: 'Awesome@gmail.com',
        to: 'swappy208@gmail.com',
        subject: 'Sending Email using Node.js',
        text: randomselect(mylist)
      };

    console.log(mailOptions);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

}, 60 * 1000);
