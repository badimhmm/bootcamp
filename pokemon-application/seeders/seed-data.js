const pool = require("../config/config")
const fs = require('fs')

fs.readFile('./data/pokemons.json', 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  data = JSON.parse(data)
  data = data.map(el => {
    return `('${el.name}',${el.HP},'${el.isFat}')`
  })
  let insertQuery = `
    INSERT INTO "Pokemons" ("name", "HP", "isFat")
    VALUES
  `;
  
 insertQuery += data;
 pool.query(insertQuery, (err, res) => {
  if (err) {
    return console.log(err)
  }
  console.log(`succesfully insert into Pokemons table!`)
 });
})