const express = require('express');
const catchAsync = require('../utils/catchAsync');
const {validateReview,isloggedin,isReviewAuthor} = require('../middleware')
const router = express.Router({mergeParams:true});
router.use(express.urlencoded({extended : true}));
const methodOverride = require('method-override');
const multer = require('multer');
const {storage} = require('../cloudinary'); 
const upload = multer({storage});

router.use(methodOverride('_method'));

const posts = require('../controllers/posts');

router.get('/',isloggedin,catchAsync(posts.renderPost));

router.post('/',isloggedin,upload.array('Post[image]'),catchAsync(posts.addPost));

router.delete('/:postid',isloggedin,catchAsync(posts.deletePost));

module.exports = router;