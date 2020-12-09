const Model = require('../models')

class Controller {
  static getRootHander(req, res){
    Model.read((err, data) => {
      if (err) return res.send(err)
      res.render('pokemons-list', {data})
    })
  }
  static getAddPokemonHander(req, res){
    res.render('pokemon-add')
  }
  static postAddPokemonHander(req, res){
    let obj = {
      name: req.body.name,
      HP: req.body.HP,
      isFat: req.body.isFat
    }
    Model.create(obj, (err, data) => {
      if (err) {
        return res.send(err)
      }
      res.redirect('/pokemons')
    })
  }
  static getDeletePokemonHander(req, res){
    const id = req.params.id
    Model.destroy(id, (err, data) => {
      if (err) return res.send(err)
      res.redirect('/pokemons')
    })
  }
}

module.exports = Controller ;