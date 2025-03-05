// import controllers review, products
const productController = require('../controllers/productController.js')
const vacancyController = require("../controllers/vacancyController.js");
const pricingController = require("../controllers/pricingController.js");
const messageController = require("../controllers/messageController.js");
const db = require('../models/index.js')

//router--------------------------------------------------------------------------------------


const router = require('express').Router()
const path = require('path');
const express = require('express');

  
  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


router.post('/addProducts', productController.upload, productController.addProduct)
router.delete('/delete/:id',productController.deleteProduct)
router.get('/allProducts', productController.getAllProducts)
router.put('/editProducts/:id', productController.updateProduct)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/login', productController.login)
router.get('/getlogin', productController.getLogin)

router.post('/signUp', productController.signUp)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/chat', productController.chat)
router.get('/sent', productController.sent)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.use('/images', express.static(path.join(__dirname, '../Images')));





//////////////////////////////////////////////////////////////////////////////////////////////////

router.post("/messages",messageController.message)



//////////////////////////////////////////////////////////////



// Create a new vacancy
router.post("/", vacancyController.create);

// Retrieve all vacancies
router.get("/", vacancyController.findAllin);

// Update a vacancy by ID
router.put("/:id", vacancyController.updated);

// Delete a vacancy by ID
router.delete("/:id", vacancyController.deleted);

/////////////////////////////////////////////////////////////



router.post("/image", productController.upload, productController.create);
router.get("/image", productController.findAll);
router.put("/image/:id", productController.update);
router.delete("/image/:id", productController.deleted);


//////////////////////////////////////////////////////////////////////////////////////////////////




// router.put('/editPricing/:id',);
router.put('/editPricing/:id',pricingController.editPricingPlan);
router.get('/getPricing', pricingController.getPricing);

router.post('/addPricing', pricingController.addPricing);












module.exports = router