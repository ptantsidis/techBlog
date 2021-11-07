const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');
const helpers = require('../../utils/helpers');

router.get('/:id', withAuth, async (req, res) => {
  try {
    const blogs = await Blog.findAll({

      include: [
        {
          model: User,
          attributes: ['name', 'id', 'email'],
          required: true
        },
        {
          model: Comment,
          attributes: ['comment', 'blogId', 'userId', 'id', 'dateCreated'],
          required: false,
          include: [
            {
              model: User,
              attributes: ['name'],
              required: false
            }
          ]
        },
      ],
    });

    const newBlog = blogs.map(blog => blog.get({ plain: true }))
    const finalBlog = newBlog.filter(blog => blog.id == req.params.id)
    console.log(finalBlog[0].comments)

    res.render('blog', {
      finalBlog: finalBlog[0],
      user_id: req.session
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;