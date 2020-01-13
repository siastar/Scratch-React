const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const testResponse = {
  foo: 'bar',
  bar: 'foo'
};


app.get('/api', (req, res) => {
  res.send(testResponse);
});

app.get('/', (req, res) => {
  res.status(200).send('Express server is running...');
});

app.listen(port, function() {
    console.log('server launched properly');
    console.log('App listening on port: ' + port);
});
