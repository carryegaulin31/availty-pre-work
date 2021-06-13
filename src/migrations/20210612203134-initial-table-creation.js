module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: Sequelize.STRING, allowNull: false },
    nameLast: { type: Sequelize.STRING, allowNull: false },
    NPI: { type: Sequelize.INTEGER, allowNull: false },
    teleNumber: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
    deletedAt: { type: Sequelize.DATE },
  }),

  down: async queryInterface => queryInterface.dropTable('users'),
}
