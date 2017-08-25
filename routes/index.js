var express = require('express');
var router = express.Router();

const db = require('monk')('localhost/portfolioblog');
const posts = db.get('posts');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/blog', function(req, res) {
	posts.find({}).then(function(response){
		res.render('blog', {posts: response});
	});
});
router.get('/blog/:id', function(req, res) {
	var id = req.params.id;
	console.log(req)
	posts.findOne({slug:req.params.id}).then(function(response){
		res.render('post', {post: response});
	});
});

module.exports = router;
