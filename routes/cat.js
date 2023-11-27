var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results cat' });
});
var express = require('express');
const cat_controlers= require('../controllers/cat');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET cats */
router.get('/', cat_controlers.cat_view_all_Page );
router.get('/detail', cat_controlers.cat_view_one_Page);
/* GET create cat page */
router.get('/create', cat_controlers.cat_create_Page);
/* GET create update page */
router.get('/update',secured, cat_controlers.cat_update_Page);
/* GET delete cat page */
router.get('/delete', cat_controlers.cat_delete_Page);

module.exports = router;