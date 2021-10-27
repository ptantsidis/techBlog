const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')

User.hasMany(Blog, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreighnKey: 'userId'
});

Comment.belongsTo(User, {
     foreignKey: 'userId'
 });

Blog.hasMany(Comment, {
     foreignKey: 'commentId'
});


module.exports={

    User,Blog, Comment
}