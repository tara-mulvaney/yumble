const { Restaurant, Review } = require('../models.js')

async function main() {

  /* delete everything in the database */

  await Restaurant.destroy({
    where: {}
  });

  await Review.destroy({
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

  /* add review seed data */

  const review01 = await Review.create({
    description: "The service wasn't great, but oh my, the pizza was arguably THE BEST we have ever had in NYC."
  })

  const review02 = await Review.create({
    description: "It's not pretty, but the experience is truly old New York greatness."
  })

  const review03 = await Review.create({
    description: "This place is good but not amazing."
  })

  const review04 = await Review.create({
    description: "We ordered the pork belly buns as an appetizer. Yummy for sure--the pork belly was appropriately tender."
  })

  const review05 = await Review.create({
    description: "The burger was EVERYTHING! It was seriously one of the best hamburgers I have ever had."
  })

  /* ddd review seed data */

  await review01.setRestaurant(motorino)
  await review04.setRestaurant(momofuku)
  await review03.setRestaurant(mission)
  await review02.setRestaurant(eisenberg)
  await review05.setRestaurant(shake)

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
