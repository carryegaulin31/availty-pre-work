module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('users', [
      {
        nameFirst: 'Edward', nameLast: 'Doolittle', NPI: 3, teleNumber: '9107367825', email: 'drdoolittle@gmail.com',
      },
      {
        nameFirst: 'Chili', nameLast: 'Pepper', NPI: 1, teleNumber: '3103967825', email: 'drpepper@gmail.com',
      },
      {
        nameFirst: 'Vince', nameLast: 'Feelgood', NPI: 12, teleNumber: '3219675309', email: 'drfeelgood@gmail.com',
      },
    ])
  },
  // eslint-disable-next-line arrow-body-style
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('users')
  },
}
