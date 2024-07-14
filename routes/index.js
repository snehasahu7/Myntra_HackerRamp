var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});
router.get('/store', function(req, res, next) {
  res.render('store', { title: 'store' });
});
router.get('/shop', function(req, res, next) {
  res.render('shop', { title: 'shop' });
});
router.get('/india', function(req, res, next) {
  res.render('indianStore', { title: 'indianStore' });
});
router.get('/alia', function(req, res, next) {
  res.render('alia', { title: 'alia' });
});
router.get('/taylor', function(req, res, next) {
  res.render('taylor', { title: 'taylor' });
});
module.exports = router;
