var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/blog', function(req, res) {
	res.render('blog/blog');
});
router.get('/blog/:id', function(req, res) {
	var id = req.params.id;
	res.render('blog/'+id);
});

module.exports = router;
