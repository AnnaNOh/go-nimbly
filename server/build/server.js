'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');

var app = express();
var port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log('We are live on ' + port);
});

var API_URL = 'https://www.metaweather.com/api/location/';
// router and controller for cities list
app.get('/cities', function(req, res) {
  axios.get(API_URL + 'search/?query=' + req.query.input).then(
    function(data) {
      res.status(200).send(data.data);
    },
    function(error) {
      res.status(500).json(error);
    }
  );
});

// router and controller for weather
app.get('/weather', function(req, res) {
  axios.get('' + API_URL + req.query.input).then(
    function(data) {
      res.status(200).send(data.data);
    },
    function(error) {
      res.status(500).json(error);
    }
  );
});
