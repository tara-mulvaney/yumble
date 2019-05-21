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
  neighborhood: Sequelize.STRING,
  url: Sequelize.STRING,
  photo: Sequelize.STRING
});

const Review = db.define('review', {
  description: Sequelize.TEXT
});

const Cuisine = db.define('cuisine', {
  food: Sequelize.STRING,
  price: Sequelize.FLOAT
});

Cuisine.belongsTo(Restaurant);
Restaurant.hasMany(Cuisine);

module.exports = {
  db,
  Restaurant,
  Cuisine,
  Review,
};
