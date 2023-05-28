const fetchPokemon = require('./api');

class Pokedex {
  constructor() {
    this.myPokemon = [];
  }

  all() {
    return this.myPokemon;
  }

  catch(pokemonName) {
    return fetchPokemon(pokemonName)
      .then((pokemon) => {
        this.myPokemon.push(pokemon);
      })
  }
}

module.exports = Pokedex;
