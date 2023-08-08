'use strict';

module.exports = {
   /**
   * 
   * @param {import('sequelize').QueryInterface} queryInterface 
   * @param {import('sequelize')} Sequelize 
   */
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id'
      }
      },
      category_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id'
      }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
