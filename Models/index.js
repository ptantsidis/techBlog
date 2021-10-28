const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

 Comment.belongsTo(User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
  });

 Blog.hasMany(Comment, {
       foreignKey: 'blogId',
       onDelete: 'CASCADE'
  });


module.exports={

    User, Blog, Comment
}