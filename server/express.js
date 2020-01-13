const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

//we use testResponse to test the api route
const testResponse = {
  cat: 'Tom',
  mouse: 'Jerry'
};

app.use(express.static(DIST_DIR));
app.get('/api', (req, res) => {
  res.send(testResponse);
});

//localhost:3000/api retirns a JSON file containing Tom and Jerry 

app.get('/', (req, res) => {
  res.status(200).send('Express server up and running...');
});

app.listen(port, function() {
    console.log('Express server launched properly');
    console.log('App listening on port: ' + port);
});

