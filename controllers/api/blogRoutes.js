const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/withAuth');
const helpers = require('../../utils/helpers');

router.get('/:id', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.findbyPK({
        include: [
          {
              model: User,
              attributes: ['name', 'id','email'],
              required: true
          } 
        ]
    });
    
    const blogs= newBlog.map(blog=>blog.get({plain:true}))
    console.log(blogs);
    console.log(req.session)

    res.render('dashboard', {
      blogs,
      scripts: [{ script: "login.js" }, { script: 'logout.js' }],
      user_id: req.session
    
    });
 
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;