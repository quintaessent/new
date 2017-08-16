var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/blog', function(req, res) {
	res.render('blog/blog');
});
router.get('/blog/:id?', function(req, res, next) {
	var id = req.params.id;
	if (id === "1"){
		res.render('blog/1');
	} else if (id === "2"){
		res.render('blog/2');
	} else {
		res.render('blog/notfound');
	}
});
router.get('/blog/:id', function(req, res) {
	console.log(req.params.id);
	res.render('blog/2');
});
module.exports = router;
