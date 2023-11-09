var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cat', { title: 'Search Results cat' });
});
var express = require('express');
const cat_controlers= require('../controllers/cat');
var router = express.Router();
/* GET cats */
router.get('/', cat_controlers.cat_view_all_Page );
module.exports = router;

