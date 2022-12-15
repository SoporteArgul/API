const nodemailer=require('nodemailer')



module.exports.sendConfirmationEmail = async (name, email, confirmationCode) => {
  console.log(confirmationCode)
  try{
     var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "1d8d25bd1140c2",
          pass: "1c1215d316f6fb"
        }
      });
  }catch(e){console.log(e)}
 

    const info= await transport.sendMail({
      from: '<foo@example.com>',
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:3000/api/v1/confirmcode/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
    
    console.log(info.messageId)
  };