const pool = require('./config/config')

const createTable = `
  DROP TABLE IF EXISTS "Pokemons";
  CREATE TABLE IF NOT EXISTS "Pokemons" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "HP" VARCHAR NOT NULL,
    "isFat" BOOLEAN NOT NULL
  )
`
pool.query(createTable, (err, res) => {
  if (err) {
    return console.log(err)
  }
  else {
    console.log(`table Pokemons successfully created!`)
  }
})