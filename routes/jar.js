// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('jar', { title: 'Search Resuts jar' });
// });

// module.exports = router;
var express = require('express'); 
const jar_controllers= require('../controllers/jar'); 
var router = express.Router(); 
 
/* GET jar */ 
router.get('/', jar_controllers.jar_view_all_Page );
// GET request for one jar. 
router.get('/jar/:id', jar_controllers.jar_detail); 
  /* GET detail jar page */ 
router.get('/detail', jar_controllers.jar_view_one_Page); 
/* GET create jar page */ 
router.get('/create', jar_controllers.jar_create_Page); 
/* GET create update page */ 
router.get('/update', jar_controllers.jar_update_Page); 
/* GET delete jar page */ 
router.get('/delete', jar_controllers.jar_delete_Page); 
module.exports = router; 


 