import nodemailer from 'nodemailer';
import Transport from 'nodemailer-brevo-transport';
import { BREVO_API_KEY } from '../config/env.js';
// import dns from 'dns';
// import {SMTP_USER, SMTP_PASS} from '../config/env.js'

const transporter = nodemailer.createTransport(
  new Transport({
    apiKey: BREVO_API_KEY
  })
);

// dns.setDefaultResultOrder('ipv4first');

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
//   // In case of issues with nodemailer uncomment the line below
//   // family: 4, 
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
//   // connectionTimeout: 30000,
// });

export default transporter;