const { log } = require("console");

const db = require('../models')
const messager = db.messager
const message = async (req, res) => {

    console.log("++++++++++++++++++++++++++++++++++++++++++++");
    
    try {
      const { fullName, phoneNumber, email, subject, message } = req.body;
      const newMessage = await messager.create({
        fullName,
        phoneNumber,
        email,
        subject,
        message,
      });
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  
module.exports = {
    message
   
   
   }