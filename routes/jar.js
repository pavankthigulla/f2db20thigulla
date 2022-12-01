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
// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET jar */ 
router.get('/', jar_controllers.jar_view_all_Page );
// GET request for one jar. 
router.get('/jar/:id', jar_controllers.jar_detail); 
  /* GET detail jar page */ 
router.get('/detail',secured, jar_controllers.jar_view_one_Page); 
/* GET create jar page */ 
router.get('/create',secured, jar_controllers.jar_create_Page); 
/* GET create update page */ 
router.get('/update', secured,jar_controllers.jar_update_Page); 
/* GET delete jar page */ 
router.get('/delete', secured,jar_controllers.jar_delete_Page); 
module.exports = router; 


 