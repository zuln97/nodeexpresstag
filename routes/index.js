var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UHF RFID' });
});
router.get('/logs', function(req, res, next) {
	res.render('index_logs', { title: 'UHF RFID LOGS' });
});

module.exports = router;
