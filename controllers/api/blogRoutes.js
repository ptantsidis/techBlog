const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/withAuth');
const helpers = require('../../utils/helpers');

router.put('/', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.update({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
module.exports = router;