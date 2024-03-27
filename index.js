const nm = require("nodemailer");
const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname,'build')))

app.post("/api/contact", async (req, res) => {
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
    } else {
      console.log("sent");
    }
  });
});

app.listen(/, () => {
  console.log("Server listening");
});
