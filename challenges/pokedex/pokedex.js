class Pokedex {
  constructor() {
    this.myPokemon = []
  }

  catch = (pokemon) => {
    this.myPokemon.push(pokemon);
  }
}

module.exports = Pokedex;
