const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'categories',
  });
    return Category;
  };
  
  module.exports = CategoryModel;