const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');
const helpers = require('../../utils/helpers');

router.post('/', withAuth, async (req, res) => {
    try {
      const addNewBlog = await Blog.create(
          { ...req.body, userId: req.session.user_id })
      console.log(addNewBlog);
      res.json(addNewBlog);
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports=router
  