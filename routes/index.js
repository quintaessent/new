var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/blog', function(req, res) {
	res.render('blog');
})
module.exports = router;
