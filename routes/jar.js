// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jar', { title: 'Search Resuts jar' });
// });

// module.exports = router;
var express = require('express'); 
const jar_controlers= require('../controllers/jar'); 
var router = express.Router(); 
 
/* GET jar */ 
router.get('/', jar_controlers.jar_view_all_Page ); 
module.exports = router; 
 