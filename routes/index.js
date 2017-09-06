var express = require('express');
var router = express.Router();

const db = require('monk')('localhost/portfolioblog');
const posts = db.get('posts');
const projects = db.get('projects');
const seo = db.get('seo');
const	postsOnPage = 3,




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
	descr: req.seo.indexDescr,
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
			descr: req.seo.projectsDescr,
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
			title: response.header,
			projects: response,
			header_class: 'projekt-page', 
			text: 'Albums'

		});
	});
});
router.get('/contacts', function(req, res) {
	res.render('contacts', {
		header_class: 'contact-page',
		 text: 'Contact', 
		 title: req.seo.contactsTitle,
		 descr: req.seo.contactsDescr
		});
});


router.get('/blog/', function(req, res) {
	let currentPage = req.query.page || 1
    let	skip = currentPage * postsOnPage
	let limit = postsOnPage
	posts.find({}, {limit, skip}).then(function(response){
		res.render('blog'), {
			posts: response,
			header_class: 'blog-home-page', 
			text: 'Blog', 
			title: req.seo.blogTitle,
			descr: req.seo.BlogDescr,
		}
	})
	posts.find({}).then(function(response){
		res.render('blog', {
			posts: response,
			 header_class: 'blog-home-page', 
			 text: 'Blog', 
			 title: req.seo.blogTitle,
			 descr: req.seo.BlogDescr,
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
			title: response.header,
		});
	});
});

module.exports = router;
