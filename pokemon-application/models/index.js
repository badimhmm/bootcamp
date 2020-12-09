const Pokemon = require('./pokemon')
const pool = require('../config/config')

class Model {
  static read(cb) {
    const selectQuery = `
      SELECT * FROM "Pokemons"
    `
    pool.query(selectQuery, (err, res) => {
      if (err) {
        cb (err)
      }
      else {
        let resultQuery = res.rows
        resultQuery = resultQuery.map(el => {
          let instancePokemon = new Pokemon(el.id, el.name, el.HP, el.isFat)
          return instancePokemon
        });
        cb(null, resultQuery)
      }
    })
  }
  static create(obj, cb) {
    const insertQuery = `
      INSERT INTO "Pokemons" ("name", "HP", "isFat")
      VALUES ($1, $2, $3) RETURNING *
    `
    const values = [obj.name, obj.HP, obj.isFat]

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        cb(err, null)
      }
      else {
        cb(null, res.row)
      }
    })
  }
  static destroy(id, cb) {
    const deleteQuery = `
      DELETE FROM "Pokemons" WHERE id = $1
    `
    const values = [id]
    pool.query(deleteQuery, values, (err, res) => {
      if (err) {
        cb(err, null)
      }
      else {
        cb(null, res.rows)
      }
    })
  }
}

module.exports = Model;

