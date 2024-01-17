const nodemailer = require("nodemailer");



var transport  = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"mngjmgjh@gmail.com",
        pass:"bxsr jeoe izkt hoks"
    }
})
function genrateOtp()
{
    return Math.floor(10000+Math.random()*90000).toString();
}
async   function sendMail(toemail) {
    
 const otp = genrateOtp();
 const mail_config =await transport.sendMail({
    from:'"mngjmgjh@gmail.com"',
    to:toemail,
    subject:'Your OTP for verfication',
    text:'rajsthan police hackthon',
    html:`<b> Your to verfiy ${otp}</b>`
 });
 console.log("Message sent: %s", mail_config.messageId);
  return otp;
}



// sendMail().catch(console.error);
module.exports = sendMail;