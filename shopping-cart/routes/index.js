var express = require('express');
var router = express.Router();
var 

/* GET home page. */
router.get('/', function(req, res, next) {
  var products
  res.render('shop/index', { title: 'Shopping Cart' });
});

module.exports = router;
