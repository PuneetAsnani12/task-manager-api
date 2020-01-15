const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'17uec087@lnmiit.ac.in',
        subject:'Thanks for joining in! ',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email,name)=>{
    sgMail.send({
        to:email,
        from:'17uec087@lnmiit.ac.in',
        subject:'Sorry to see you go!',
        text: `GoodBye ${name}, It felt good to have you on board.But before leaving, please provide us with a feedback for what has gone wrong on our side or what can we improve ?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}