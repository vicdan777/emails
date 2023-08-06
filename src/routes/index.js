const express = require('express');
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/contact', async(req,res)=>{

    const {name,email,subject,message}=req.body
    
    await sendEmail({
        to:"ibarravictor334@gmail.com",
        subject:"Alguien visito tu portfolio y tienes un msj",
        html:`
           <h1>${name} te ha dejado esto </h1>
           <ul>
           
            <li> <b> Nombre: </b> ${name}</li>
            <li> <b> Email: </b> ${email}</li>
            <li> <b> Objeto: </b> ${subject}</li>
            <li> <b> Mensaje: </b> ${message}</li>
           
           </ul>
        `
    })

    return res.json({message:"Email send successfully"})
})


module.exports = router;
