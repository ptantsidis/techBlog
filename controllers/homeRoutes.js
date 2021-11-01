const router = require("express").Router();
// const withAuth = require("../utils/withAuth");
// const { Blog, User, Comment } = require("../models");
// const { sequelize } = require("../models/User");

router.get("/",(req,res) => {
    res.render("login")
})

router.get("/signup",(req,res) => {
    res.render("signup")
})

router.get("/dashboard",(req,res) => {
    res.render("dashboard")
})

module.exports = router