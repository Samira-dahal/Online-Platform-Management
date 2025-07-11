import nodemailer from 'nodemailer'


interface IMailInformation{
    to : string, 
    subject : string, 
    text : string
}

const sendMail = async (mailInformation:IMailInformation)=>{

 const transporter = nodemailer.createTransport({
    service : "gmail", 
    auth : {
        user : process.env.NODEMAILER_GMAIL,
        pass : process.env.NODEMAILER_GMAIL_APP_PASSWORD
    }
 })

 const mailFormatObject = {
    from : "Google <google@gmail.com>",
    to : mailInformation.to, 
    subject : mailInformation.subject, 
    html : mailInformation.text
 }

try {
    await transporter.sendMail(mailFormatObject)
} catch (error) {
    console.log(error)
}

}


export default sendMail 