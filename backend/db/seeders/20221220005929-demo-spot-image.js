'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://www.flemishgiantrabbit.com/wp-content/uploads/2018/09/outdoor-rabbit-hutch.jpg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://www.ruralking.com/media/catalog/product/7/d/7d005b89b167f190ec83c0b508cd2c5234c37357_62282_n.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://www.ruralking.com/media/catalog/product/8/0/806b90d3867309477f34bffb389ed9dc6d852ac2_62281_2.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://static.wixstatic.com/media/3a13fe_e899c21af5034757b4e338a67b47339d.jpg/v1/fill/w_800,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a13fe_e899c21af5034757b4e338a67b47339d.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://s3-ap-southeast-2.amazonaws.com/container-door-touch/marketing_images/images/40294/large/Pet_Hutch_-_Web1.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://i5.walmartimages.com/asr/eafc6d78-d887-412e-9fda-0e6d9c537114.8c9ea4cfb54584641d0404514f7329e4.jpeg',
        preview: true
      },
      {
        spotId: 2,
        url: 'image-url-6',
        preview: false
      },
      {
        spotId: 2,
        url: 'image-url-7',
        preview: true
      },
      {
        spotId: 2,
        url: 'image-url-8',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cdn.shopify.com/s/files/1/2181/3133/products/Rabbit-Hutch-Wooden-Bunny-Coop-Hen-House-Outdoor-Two-Story-Animal-Pet-cage-Garden-Backyard-with-Run-2-ColorsRedGray-and-White-B0894PGBTZ_2_1024x1024.jpg?v=1598256996',
        preview: true
      },
      {
        spotId: 3,
        url: 'image-url-10',
        preview: false
      },
      {
        spotId: 3,
        url: 'image-url-11',
        preview: true
      },
      {
        spotId: 3,
        url: 'image-url-12',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://i5.walmartimages.com/asr/199b4a26-86eb-4197-a454-1b013f14c86d.03915e60a67583308ff9f600b1358f5b.jpeg',
        preview: true
      },
      {
        spotId: 4,
        url: 'image-url-14',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://www.coopsandcages.com.au/wp-content/uploads/2019/09/Holly-Coops-and-Cages-Pet-Product-450x338.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: 'image-url-16',
        preview: false
      },
      {
        spotId: 5,
        url: 'image-url-17',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://cdn.shopify.com/s/files/1/0627/5930/5406/products/8_8e143e11-9637-4054-be7e-5f0a023c47f6.jpg',
        preview: false
      },
      {
        spotId: 6,
        url: 'image-url-19',
        preview: true
      },
      {
        spotId: 6,
        url: 'image-url-20',
        preview: false
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
