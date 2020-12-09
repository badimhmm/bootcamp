const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Pokemons',
  password: 'badi12345',
  connectionTimeoutMillis: 3000,
  idleTimeoutMillis: 2000
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   // pool.end()
// })

module.exports = pool;