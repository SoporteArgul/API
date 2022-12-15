const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ayden.mcglynn@ethereal.email',
        pass: 'fUcbqNnnjJGdbdJJrZ'
    }
});


module.exports={transport}