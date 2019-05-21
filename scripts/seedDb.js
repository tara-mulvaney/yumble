const { Restaurant, Review, Cuisine } = require('../models.js')

async function main() {

  /* delete everything in the database */

  await Restaurant.destroy({
    where: {}
  });

  await Review.destroy({
    where: {}
  });

  await Cuisine.destroy({
    where: {}
  });

  /* ddd restaurant seed data */

  const motorino = await Restaurant.create({
    name: 'Motorino',
    neighborhood: 'East Village',
    url: 'https://www.motorinopizza.com/',
    photo: 'https://assets3.thrillist.com/v1/image/1630525/size/tmg-venue_carousel_mobile.jpg'
  })

  const momofuku = await Restaurant.create({
    name: 'Momofuku Noodle Bar',
    neighborhood: 'East Village',
    url: 'https://momofukunoodlebar.com/',
    photo: 'https://momofuku-assets.s3.amazonaws.com/uploads/sites/15/2018/11/NB-1-506x337.jpg'
  })

  const mission = await Restaurant.create({
    name: 'Mission Chinese Food',
    neighborhood: 'Lower East Side',
    url: 'https://www.missionchinesefood.com/',
    photo: 'https://www.nycgo.com/images/venues/2549/missionchinesefood_paulquitoriano_20150405_0156__x_large.jpg'
  })

  const eisenberg = await Restaurant.create({
    name: 'Eisenberg Sandwich Shop',
    neighborhood: 'Flatiron District',
    url: 'http://eisenbergsnyc.com/',
    photo: 'https://villagevoice.freetls.fastly.net/wp-content/uploads/2014/08/img_9649.jpg'
  })

  const shake = await Restaurant.create({
    name: 'Shake Shack',
    neighborhood: 'Flatiron District',
    url: 'https://www.shakeshack.com/',
    photo: 'https://media1.fdncms.com/clevescene/imager/u/original/18743642/shake_shack_burgers.jpg'
  })

  const motorinoMenu1 = await Cuisine.create({
  food: 'Mixed Greens Salad',
  price: 8.50
})

const motorinoMenu2 = await Cuisine.create({
  food: 'Salumi Plate',
  price: 14.50
})

const motorinoMenu3 = await Cuisine.create({
  food: `Motorino's Meatballs`,
  price: 14.50
})

const motorinoMenu4 = await Cuisine.create({
  food: 'Octopus Salad',
  price: 16.50
})

const motorinoMenu5 = await Cuisine.create({
  food: 'Marinara Pizza',
  price: 12.50
})

const motorinoMenu6 = await Cuisine.create({
  food: 'Margherita Pizza',
  price: 18.50
})

const motorinoMenu7 = await Cuisine.create({
  food: 'Del Popolo Pizza',
  price: 19.50
})

const motorinoMenu8 = await Cuisine.create({
  food: 'Cherrystone Clam Pizza',
  price: 22
})

const motorinoMenu9 = await Cuisine.create({
  food: 'Cremini Mushroom Pizza',
  price: 20.50
})

const motorinoMenu10 = await Cuisine.create({
  food: 'Brussels Sprout',
  price: 20.50
})

await motorinoMenu1.setRestaurant(motorino)
await motorinoMenu2.setRestaurant(motorino)
await motorinoMenu3.setRestaurant(motorino)
await motorinoMenu4.setRestaurant(motorino)
await motorinoMenu5.setRestaurant(motorino)
await motorinoMenu6.setRestaurant(motorino)
await motorinoMenu7.setRestaurant(motorino)
await motorinoMenu8.setRestaurant(motorino)
await motorinoMenu9.setRestaurant(motorino)
await motorinoMenu10.setRestaurant(motorino)
  
}

async function run() {
  try {
    await main();
  } catch (e) {
    console.error(e);
  } finally {
    await process.exit()
  }
}

run();
