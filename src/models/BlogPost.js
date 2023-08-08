const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'user' });
    };
  
    return BlogPost;
  };
  
  module.exports = BlogPostModel;