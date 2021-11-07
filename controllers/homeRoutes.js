const router = require("express").Router();
const withAuth = require("../utils/withAuth");
const { Blog, User } = require("../models");
const { sequelize } = require("../models/User");

router.get("/",(req,res) => {
  
  res.render("home", {
    user_id: req.session,
  })
})

router.get("/signup",(req,res) => {
    
  req.session.save(() => {
    // req.session.user_id = {id:userData.id, name:userData.userName,email:};
    // req.session.logged_in = true;
  req.session.user_id = userData.id;
  req.session.logged_in = true;
  req.session.username = userData.name;
  req.session.useremail = userData.email;

  res.json({ user: userData, message: "You are now logged in!" });
  });
  res.render("signup", {
    user_id: req.session,
  })
})

router.get('/login', (req,res) => {
  res.render('login');
})

router.get('/dashboard',  async (req, res) => {
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
        // scripts: [{ script: "login.js" }, { script: 'logout.js' }],
        user_id: req.session,
        

      });
   
    } catch (err) {
      res.status(400).json(err);
    }
  });
module.exports = router