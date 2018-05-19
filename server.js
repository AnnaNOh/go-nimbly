const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

// require('./app/routes')(app, {});
app.get('/api/hello/', (req, res) => {
  res.send({ express: 'Hello from express' });
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});

// import { getCities } from './backend/util/location_util';

// let TRUONG = require('./backend/util/location_util');
//
// TRUONG.getCities('San Francisco');
