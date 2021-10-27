const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userSeed = require('./userSeed.json');
const blogSeed = require('./blogSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

const users = await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });
const blogs = await Blog.bulkCreate(blogSeed,{
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
