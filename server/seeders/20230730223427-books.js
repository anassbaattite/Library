'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name: 'the zab',
        author: 'l9lawi',
        year_published: 1999
      },
      {
        name: 'the zab',
        author: 'l9lawi',
        year_published: 1999
      },
      {
        name: 'the zab',
        author: 'l9lawi',
        year_published: 1999
      },
      {
        name: 'the zab',
        author: 'l9lawi',
        year_published: 1999
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('book', null, {})
  }
};
