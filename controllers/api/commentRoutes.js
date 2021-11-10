const router = require('express').Router();
const {  Comment } = require('../../models');
const withAuth = require("../../utils/withAuth");


router.post('/', async (req, res) => {
  console.log(req.body)
   try {
       const newComment = await Comment.create({
       comment:req.body.newComment,
       blogId:req.body.newBlogId,
       userId:req.session.user_id
     });
    console.log(newComment);
    res.status(200).json(newComment);
  } catch (err) {
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
  } catch (err) {
    res.status(400).json(err);
  }
})

module.exports = router;