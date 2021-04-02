const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express();



// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.render('main');
});

app.post('/send', (req, res) => {
  console.log("request came");
  console.log(req.body)
  var name = req.body.name;
  var company = req.body.company;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;

  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${name}</li>
      <li>Company: ${company}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${phone}</li>

    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'samad06june@gmail.com', // generated ethereal user
        pass: 'Samad*123#'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <samad06june@gmail.com>', // sender address
      to: 'samadbat2000@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      res.send(info);

  });
  });

app.listen(3000, () => console.log('Server started...'));