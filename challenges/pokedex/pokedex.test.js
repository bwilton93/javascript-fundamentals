const Pokedex = require('./pokedex')
const fetchPokemon = require('./api')

describe(Pokedex, () => {
  it('initialises with an empty pokedex', () => {
    const pokedex = new Pokedex;
    expect(pokedex.myPokemon.length).toBe(0);
  })

  it('catches Pikachu and adds it to the Pokedex', async () => {
    const pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    let result = pokedex.all();
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('pikachu');
  })

  it('catches pikachu and jigglypuff', async () => {
    const pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    await pokedex.catch('jigglypuff');
    let result = pokedex.all();
    expect(result.length).toBe(2);
    expect(result[0].name).toBe('pikachu');
    expect(result[1].name).toBe('jigglypuff');
  })
})
