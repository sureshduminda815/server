const express = require('express')

//const path = require('path');


const app = express()
//const cors = require('cors')
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
// middleware
//const request = require('request');

//app.use(express.urlencoded({ extended: true }))
//app.use(bodyParser.json());
app.use(express.json())






// app.use(cors())



// const router = require('./routes/router.js')
// app.use('/api', router);

// app.use('/images', express.static(path.join(__dirname, './Images')));
// app.use("/api/vacancies", router);
// app.use('/admin', router);






const PORT = 8080

//server





app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

