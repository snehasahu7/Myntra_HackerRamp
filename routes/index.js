var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/alia', function(req, res, next) {
  res.render('alia', { title: 'alia' });
});
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});
router.get('/taylor', function(req, res, next) {
  res.render('taylor', { title: 'taylor' });
});
router.get('/store', function(req, res, next) {
  res.render('store', { title: 'store' });
});

router.get('/india', function(req, res, next) {
  res.render('indianStore', { title: 'indianStore' });
});

module.exports = router;
