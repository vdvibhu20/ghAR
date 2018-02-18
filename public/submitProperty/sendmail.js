var nodemailer= require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ghar.demo@gmail.com',
        pass: 'passwordbekarhai'
    }
});

var mailOptions = {
    from: 'ghar.demo@gmail.com',
    to: '',
    subject: 'Property Submitted',
    text: ''
};

function sendmail(req, callback){
    console.log(req);
    mailOptions.to= 'abhisheksh96@gmail.com';
    mailOptions.text= JSON.stringify(req);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            callback({success: false, msg: error});
        } else {
            console.log('Email sent: ' + info.response);
            callback({success: true, data: info.response});
        }
    });
}

module.exports.sendmail= sendmail;