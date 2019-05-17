const { Sequelize } = require('sequelize');

const db = new Sequelize({
  database: 'yumble_db',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const Restaurant = db.define('restaurant', {
  name: Sequelize.STRING,
  neighborhood: Sequelize.STRING
});

const Review = db.define('review', {
  description: Sequelize.TEXT
});

const Cuisine = db.define('cuisine', {
  style: Sequelize.STRING
});

module.exports = {
  db,
  Restaurant,
  Cuisine,
  Review,
};
