const Pokedex = require('./pokedex')
const fetchPokemon = require('./api')

describe(Pokedex, () => {
  it('initialises with an empty pokedex', () => {
    const pokedex = new Pokedex;
    expect(pokedex.myPokemon.length).toBe(0);
  })

  it('a pokemon can be added to the pokdex using the catch method', () => {
    const pokedex = new Pokedex;
    pokedex.catch(fetchPokemon('pikachu'));
    expect(pokedex.myPokemon.length).toBe(1);
  })
})
