import nodemailer from 'nodemailer';
import es6Promise from 'es6-promise';


const mailConf = require('config.json')('../defaultData.json').mail;

const Promise = es6Promise.Promise;

const sendingMail = (mailOptions){
  const transport = nodemailer.createTransport(mailConf);
  return new Promise( (fulfill, reject) => {
    transport.sendMail(mailOptions, (err, res) => {
      if(err) reject(err);
      else fulfill(res);
    });
  });
}
