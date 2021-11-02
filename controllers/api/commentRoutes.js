
console.log('commentRoute');
  
  const router = require('express').Router();
const { User, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.update({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {s
      res.status(400).json(err);
    }
  });
router.get('/:id', async (req,res) => {
  try {
    const newComment = await Comment.findPK({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {s
    res.status(400).json(err);
  }
})
// How do I attach the comment to the blog
module.exports = router;