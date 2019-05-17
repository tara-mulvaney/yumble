const express = require('express');
const { Restaurant, Review, Cuisine } = require('./models');
const app = express();

const PORT = process.env.PORT || 3000

app.get('/', async (request, response) => {
  try {
    response.send('yumble')
  } catch (e) {
    response.status(500).json({ msg: e.status })
  }
});

//GET ALL
app.get('/restaurants', async (request, response) => {
  try {
    const restaurants = await Restaurant.findAll();
    response.json({
      restaurants
    })
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

//GET ONE BY ID
app.get('/restaurants/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const restaurant = await Restaurant.findByPk(id)

    if (!restaurant) throw Error('Restaurant not found');

    response.json({
      restaurant
    })
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})


//CREATE ONE
app.post('/restaurants', async (request, response) => {
  try {
    const restaurant = await Restaurant.create(request.body)
    response.json({
      restaurant
    })
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

//DELETE
app.delete('/restaurants/:id', async (req, res) => {
  try {
    const id = req.params.id
    console.log(id)

    const restaurant = await Restaurant.findByPk(id)

    if(restaurant) await restaurant.destroy()

    res.json({
      message: `Restaurant with id ${id} deleted`
    })
  } catch (e) {
    res.json({ msg: e.message })
  }
});


//UPDATE ONE
app.put('/restaurants/:id', async (req, res) => {
  try {
  	 const id = req.params.id;
    const restaurant = await Restaurant.findByPk(id);

    if (restaurant) await restaurant.update(req.body);
    res.json({
      restaurant
    });
  } catch(e) {
    res.json({
      message: e.message
    });
  }
})



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
