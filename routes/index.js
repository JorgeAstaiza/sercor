const { Router } = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async(req, res)=> {
    const {nombre, correo, telefono, mensaje} = req.body;
    contentHTML = `
        <h1>Informacion del usuario</h1>
        <ul>
            <li>Nombre: ${nombre}</li>
            <li>Corre: ${correo}</li>
            <li>Telefono: ${telefono}</li>
        </ul>
        <p>${mensaje}</p>
    `;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.es',
        port: 587,
        secure: false,
        auth: {
            user: 'info@sercoresahi.com',
            pass: 'Pajarito20*'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    const info = await transporter.sendMail({
        from: 'SERCOR Server',
        to: 'info@sercoresahi.com',
        subject: 'Mensaje recibido desde sercor',
        html: contentHTML
    });
    res.redirect('/index.html');
})

module.exports = router;