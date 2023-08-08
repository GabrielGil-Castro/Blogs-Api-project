const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        allowNull: false,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        field: 'category_id',
        references: {
          model: 'categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    }, {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
       as: 'blogPosts', through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId'
      });
  
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory, foreignKey: 'postId', otherKey: 'categoryId', as: 'categories'
      });
    };
  
    return PostCategory;
  };
  
  module.exports = PostCategoryModel;