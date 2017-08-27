var express = require('express');
var router = express.Router();

const db = require('monk')('localhost/portfolioblog');
const posts = db.get('posts');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header_class: 'ytp-video-bg', header_id: 'header-page'});
});
router.get('/contacts', function(req, res) {
	res.render('contacts', {header_class: 'contact-page', text: 'Contact', title: 'contacts'});
});
router.get('/album', function(req, res) {
	res.render('album', {header_class: 'albums-page', text: 'Albums',title: 'album'});
});
router.get('/project', function(req, res) {
	res.render('project', {header_class: 'projekt-page', text: 'Albums'});
});
router.get('/blog', function(req, res) {
	posts.find({}).then(function(response){
		res.render('blog', {posts: response, header_class: 'blog-home-page', text: 'Blog', title: 'blog'});
	});
});
router.get('/blog/:id', function(req, res) {
	var id = req.params.id;
	posts.findOne({slug:req.params.id}).then(function(response){
		res.render('post', {post: response, header_class: 'blog-home-page', text: 'Single post'});
	});
});

module.exports = router;
