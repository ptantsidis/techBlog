const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');
const helpers = require('../../utils/helpers');
let owner;
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

    if (req.session.user_id == finalBlog[0].userId) {
      owner = true;
    }else {
      owner = false;
    }
    console.log(req.session.user_id, finalBlog[0].userId);
    console.log(owner);

    res.render('blog', {
      finalBlog: finalBlog[0],
      user_id: req.session,
      owner: owner
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/updateBlog/:id', withAuth, async (req,res) => {
  try {
    const blogs = await Blog.update
     ({ where :{id: req.params.id}})
     res.json(blogs)
  }
  catch (err){
    res.status(400).json(err);
  }
})


module.exports = router;