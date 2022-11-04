var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jar', { title: 'Search Resuts jar' });
});

module.exports = router;
