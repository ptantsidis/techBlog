const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/blogRoutes', blogRoutes);
router.use('/commentRoutes', commentRoutes);

module.exports = router;