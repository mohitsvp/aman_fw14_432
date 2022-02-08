const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "934d22ad474231", // generated ethereal user
    pass: "2042e3d36b8687", // generated ethereal password
  },
});