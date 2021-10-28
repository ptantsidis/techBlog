const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

User.hasMany(Blog, {
    foreignKey: 'userId'
});

// Comment.hasMany(User, {
//      foreignKey: 'userId'
//  });

// Comment.hasMany(Blog, {
//       foreignKey: 'BlogId'
//  });


module.exports={

    User, Blog, Comment
}