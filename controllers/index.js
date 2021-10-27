const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const blogRoutes = require('./api/blogRoutes');
// const commentRoutes = require('./api/commentRoutes');


router.use('/users', userRoutes);
router.use('/blogRoutes', blogRoutes);
// router.use('/commentRoutes', commentRoutes);

module.exports = router;