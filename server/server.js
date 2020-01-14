// const express = require('express');
// const catsRoute = require('./api/routes/catsRoute.js')
// const app = express();
// const PORT = process.env.PORT || 3000;

// const path = require('path');
// const DIST_DIR = path.join(__dirname, '../dist');
// const HTML_FILE = path.join(DIST_DIR, 'index.html');

// //we use testResponse to test the api route
// const testResponse = {
//   cat: 'Tom',
//   mouse: 'Jerry'
// };

// app.use('/catspage' , catsRoute)

// app.use(express.static(DIST_DIR));
// app.get('/api', (req, res) => {
//   res.send(catsRoute);
// });

// //localhost:3000/api returns a JSON file containing Tom and Jerry 

// app.get('/', (req, res) => {
//   res.status(200).send('Express server up and running...');
// });

// app.listen(PORT, function() {
//     console.log('Express server launched properly');
//     console.log('App listening on PORT: ' + PORT);
// });


const express = require ('express');
const app = express();

const PORT = 1234;

const homeRoute = '/';
const CatsRoute = require ('./api/routes/catsRoute.js'); 

const path = require('path');
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////  MIDDLEWARES - ROUTES DEFINED IN OTHER MODULES            ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Middlewares
// // middlewares allow server to manipulate data retrieved from db according to the chosen route

app.use('/catspage' , CatsRoute);
// //when "localhost:PORT/catpages" is reached "CatsRoute" is invoked from the path ./routes/CatsRoute.js.
// //in CatsRoute there could be countless subroutes /catpages/tom /catpages/sylvester .... catpages/whoevercat 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////  NEXT  ROUTES ARE HARDCODED IN THE app.js, NOT A GREAT IDEA BUT ANYWAY...  //////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // this route is hardcoded in the app.js file
app.get(homeRoute , (req, res) => {
    res.send('this is the Home Page (this message is hardcoded in /server.js which is considered a middleware)');
    // responds to the request by sending the outcoming output on "homeRoute" (localhost:PORT/)    
 });

// console.log('listening on', PORT)
// app.listen(PORT);

app.listen(PORT, function() {
    console.log('Express server launched properly');
    console.log('App listening on PORT: ' + PORT);
});


