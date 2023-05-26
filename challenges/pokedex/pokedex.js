class Pokedex {
  constructor() {
    this.myPokemon = [];
  }

  all() {
    return this.myPokemon;
  }

  catch(pokemon) {
    // this.pokemon = pokemon;
    // console.log(pokemon);
    this.myPokemon.push(pokemon);
  }
}

// let pokedex = new Pokedex;
// pokedex.catch(fetchPokemon('pikachu'));
// console.log(pokedex.myPokemon);
// console.log(fetchPokemon('pikachu'));

module.exports = Pokedex;
