// const nm = require("nodemailer");
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// require('dotenv').config();

// const app = express();

// app.use(express.json());
// app.use(cors());
// //app.use(express.static(path.resolve(__dirname,'build')))

// app.post("/api/contact", async (req, res) => {
//     console.log("req.body", req.body)
//   const { name, email, message } = req.body;
//   const password = process.env.EMAIL_PASSWORD;
//   const transporter = nm.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "test.personal0123@gmail.com",
//       pass: password,
//     },
//   });
//   const options = {
//     from: email,
//     to: "test.personal0123@gmail.com",
//     subject: "test subject",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(options, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("sent");
//     }
//   });
// });

// app.get('/',(req, res)=>{
//   res.json({status:'success'})
// })

// app.listen( () => {
//   console.log("Server listening on port 3000");
// });

// const nm = require("nodemailer");
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// require('dotenv').config();



// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(express.static(path.resolve(__dirname,'build')))

// app.get("/api/contact", async (req, res) => {
//     console.log("req.body", req.body)
//   const { name, email, message } = req.body;
//   const password = process.env.EMAIL_PASSWORD;
//   const transporter = nm.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "test.personal0123@gmail.com",
//       pass: password,
//     },
//   });
//   const options = {
//     from: email,
//     to: "test.personal0123@gmail.com",
//     subject: "test subject",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   transporter.sendMail(options, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("sent");
//     }
//   });
// });

// app.post("http://localhost:3000/api/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   // Validate data (e.g., check if required fields are present, validate email format)

//   const transporter = nm.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: "test.personal0123@gmail.com",
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "test.personal0123@gmail.com",
//     subject: "Test Subject",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent: " + info.response);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Failed to send email" });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to the server!'); // Or any other response you want to send
// });
// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

const nm = require("nodemailer");
const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname,'build')));

app.post("/api", async (req, res) => {
    console.log("req.body", req.body)
  const { name, email, message } = req.body;
  const password = process.env.EMAIL_PASSWORD;
  const transporter = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "test.personal0123@gmail.com",
      pass: password,
    },
  });
  const options = {
    from: email,
    to: "test.personal0123@gmail.com",
    subject: "test subject",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

    transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send("Failed to send email.");
        } else {
            console.log("Email sent successfully");
            res.status(200).send("Email sent successfully");
        }
    });
});

