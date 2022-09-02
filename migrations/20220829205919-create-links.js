'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      oportunidadId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      link1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      link2: {
        type: Sequelize.STRING
      },
      link3: {
        type: Sequelize.STRING
      },
      user_fk: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { // User belongsTo Company 1:1
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('links');
  }
};