const router = require('express').Router()
const Controller = require('../controllers')

router.get('/', (req, res) => {
  res.render('home')
})
router.get('/pokemons', Controller.getRootHander)
router.get('/pokemons/add', Controller.getAddPokemonHander)
router.post('/pokemons/add', Controller.postAddPokemonHander)
router.get('/pokemons/delete/:id', Controller.getDeletePokemonHander)

module.exports = router;