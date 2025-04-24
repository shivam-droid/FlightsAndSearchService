'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [{
      name: 'Indira Gandhi International Airport',
      address: 'New Delhi, Delhi 110037',
      cityId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Kempegowda International Airport',
      address: 'Karnataka 560300',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mysuru Airport',
      address: 'Karnataka 571802',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Chhatrapati Shivaji International Airport',
      address: 'Maharashtra 400099',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
