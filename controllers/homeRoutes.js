const router = require("express").Router();
const withAuth = require("../utils/withAuth");
 const { Blog, User } = require("../models");
 const { sequelize } = require("../models/User");

router.get("/",(req,res) => {
    res.render("login")
})

router.get("/signup",(req,res) => {
    
    // req.session.save(() => {
    //     req.session.user_id = {id:userData.id, name:userData.userName,email:};
    //     req.session.logged_in = true;
  
    //     res.json({ user: userData, message: "You are now logged in!" });
    //   });
      res.render("signup")
})

// router.get("/dashboard",withAuth, (req,res) => {
//     console.log(req.session.user,"user");
//     res.render("dashboard",{username:req.session.username,email:req.session.useremail,user_id: req.session.user_id})
// })
router.get('/dashboard', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.findAll({
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
module.exports = router