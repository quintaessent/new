var express = require('express');
var router = express.Router();

const db = require('monk')('localhost/portfolioblog');
const posts = db.get('posts');
const projects = db.get('projects');
const seo = db.get('seo');

router.use(function(req, res,next){
	seo.findOne({}).then(function(seo){
		req.seo = seo;
		next()
	});

})
/* GET home page. */
router.get('/', function(req, res) {
	console.log(req.seo);
  res.render('index', {
	title: req.seo.indexTitle,
	header_class: 'ytp-video-bg', 
	header_id: 'header-page',
	mainPage: true
	});
});

router.get('/projects', function(req, res) {
	projects.find({}).then(function(response){
		console.log(response);
		res.render('projects', {
			title: req.seo.projectsTitle,
			projects: response,
			header_class: 'albums-page', 
			text: 'Albums',

		});
	});
	
});
router.get('/projects/:id', function(req, res){
	var id = req.params.id;
	projects.findOne({slug:req.params.id},{}).then(function(response){
		console.log(response);
		res.render('project', {
			title: req.seo.projectsTitle,
			projects: response,
			header_class: 'projekt-page', 
			text: 'Albums',

		});
	});
});
router.get('/contacts', function(req, res) {
	res.render('contacts', {
		header_class: 'contact-page',
		 text: 'Contact', 
		 title: req.seo.contactsTitle,
		});
});


router.get('/blog', function(req, res) {
	posts.find({}).then(function(response){
		console.log(response);
		res.render('blog', {
			posts: response,
			 header_class: 'blog-home-page', 
			 text: 'Blog', 
			 title: req.seo.blogTitle,
		});
	});
});
router.get('/blog/:id', function(req, res) {
	var id = req.params.id;
	posts.findOne({slug:req.params.id}).then(function(response){
		console.log(response);
		res.render('post', {
			post: response, 
			header_class: 'blog-home-page', 
			text: 'Single post',
			title: req.seo.blogTitle,
		});
	});
});

module.exports = router;
