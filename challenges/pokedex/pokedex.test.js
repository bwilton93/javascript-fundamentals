const Pokedex = require('./pokedex')

describe(Pokedex, () => {
  it('initialises with an empty pokedex', () => {
    const pokedex = new Pokedex;
    expect(pokedex.myPokemon.length).toBe(0);
  })
})
