const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')

User.hasMany(Blog, {
    foreignKey: 'user-id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreighnKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});
