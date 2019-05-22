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

const missionMenu1 = await Cuisine.create({
  food: 'Iced Sichuan Water Pickles',
  price: 8
})

const missionMenu2 = await Cuisine.create({
  food: 'Chongqing Chicken Wings W/XXX Spices',
  price: 16
})

const missionMenu3 = await Cuisine.create({
  food: 'Salt Cod Fried Rice',
  price: 16
})

const missionMenu4 = await Cuisine.create({
  food: 'Green Tea Noodles',
  price: 12
})

const missionMenu5 = await Cuisine.create({
  food: 'Hot And Sour Rice Cakes',
  price: 17
})

const missionMenu6 = await Cuisine.create({
  food: 'Dan Dan Ramen',
  price: 18
})

const missionMenu7 = await Cuisine.create({
  food: 'Drunken Noodles',
  price: 18
})

const missionMenu8 = await Cuisine.create({
  food: 'Hainan Style Crab Rice',
  price: 30
})

const missionMenu9 = await Cuisine.create({
  food: 'Lobster Fried Rice',
  price: 30
})

const missionMenu10 = await Cuisine.create({
  food: 'Turmeric Lamb Rice',
  price: 20
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

await missionMenu1.setRestaurant(mission)
await missionMenu2.setRestaurant(mission)
await missionMenu3.setRestaurant(mission)
await missionMenu4.setRestaurant(mission)
await missionMenu5.setRestaurant(mission)
await missionMenu6.setRestaurant(mission)
await missionMenu7.setRestaurant(mission)
await missionMenu8.setRestaurant(mission)
await missionMenu9.setRestaurant(mission)
await missionMenu10.setRestaurant(mission)

await motorinoMenu1.setRestaurant(momofuku)
await motorinoMenu2.setRestaurant(momofuku)
await motorinoMenu3.setRestaurant(momofuku)
await motorinoMenu4.setRestaurant(momofuku)
await motorinoMenu5.setRestaurant(momofuku)
await motorinoMenu6.setRestaurant(momofuku)
await motorinoMenu7.setRestaurant(momofuku)
await motorinoMenu8.setRestaurant(momofuku)
await motorinoMenu9.setRestaurant(momofuku)
await motorinoMenu10.setRestaurant(momofuku)

await missionMenu1.setRestaurant(eisenberg)
await missionMenu2.setRestaurant(eisenberg)
await missionMenu3.setRestaurant(eisenberg)
await missionMenu4.setRestaurant(eisenberg)
await missionMenu5.setRestaurant(eisenberg)
await missionMenu6.setRestaurant(eisenberg)
await missionMenu7.setRestaurant(eisenberg)
await missionMenu8.setRestaurant(eisenberg)
await missionMenu9.setRestaurant(eisenberg)
await missionMenu10.setRestaurant(eisenberg)

await motorinoMenu1.setRestaurant(shake)
await motorinoMenu2.setRestaurant(shake)
await motorinoMenu3.setRestaurant(shake)
await motorinoMenu4.setRestaurant(shake)
await motorinoMenu5.setRestaurant(shake)
await motorinoMenu6.setRestaurant(shake)
await motorinoMenu7.setRestaurant(shake)
await motorinoMenu8.setRestaurant(shake)
await motorinoMenu9.setRestaurant(shake)
await motorinoMenu10.setRestaurant(shake)
  
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
