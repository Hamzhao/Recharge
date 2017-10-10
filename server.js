var express = require('express')
var app = express()

var appData = require('./data.json');
var telFare = appData.telFare;
var flowFare = appData.flowFare;
var payType = appData.payType;
var explain = appData.explain;

var apiRoutes = express.Router()

apiRoutes.get('/telFare', function (req, res) {
  res.json({
    errno: 200,
    data: telFare
  });
});

apiRoutes.get('/flowFare', function (req, res) {
  res.json({
    errno: 200,
    data: flowFare
  });
});

apiRoutes.get('/payType', function (req, res) {
  res.json({
    errno: 200,
    data: payType
  });
});

apiRoutes.get('/explain', function (req, res) {
  res.json({
    errno: 200,
    data: explain
  });
});

app.use('/api', apiRoutes);
app.use(express.static('./dist'))

app.get('/', function (req, res) {
  res.send('Hello Vue')
})

app.listen(2333)