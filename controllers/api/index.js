const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
const addBlogRoutes = require('./addBlogRoutes');

router.use('/users', userRoutes);
router.use('/blogRoute', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/addBlog', addBlogRoutes);

module.exports = router;