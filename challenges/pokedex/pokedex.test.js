const Pokedex = require('./pokedex')
const fetchPokemon = require('./api')

describe(Pokedex, () => {
  it('initialises with an empty pokedex', () => {
    const pokedex = new Pokedex;
    expect(pokedex.myPokemon.length).toBe(0);
  })

  it('catchs Pikachu and adds it to the Pokedex', async () => {
    const pokedex = new Pokedex;
    await pokedex.catch('pikachu');
    let result = pokedex.all();
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('pikachu');
  })

  // it('a pokemon can be added to the pokedex using the catch method', () => {
  //   const pokedex = new Pokedex;
  //   let pokemon = fetchPokemon('pikachu')
  //   pokedex.catch(pokemon);
  //   expect(pokedex.myPokemon.length).toBe(1);
  // })

  // it('multiple pokemon can be added to the pokedex using the catch method', () => {
  //   const pokedex = new Pokedex;
  //   pokedex.catch(fetchPokemon('pikachu'));
  //   pokedex.catch(fetchPokemon('jigglypuff'));
  //   expect(pokedex.myPokemon.length).toBe(2);
  // })
  
  // it('returns an array of one pokemon when one pokemon is added', () => {
  //   const pokedex = new Pokedex;
  //   fetchPokemon('pikachu')
  //     .then((pokemon) => {
  //       return pokemon
  //     });
  //     pokedex.catch(pokemon);
  //     let result = pokedex.all();
  //     expect(result.length).toBe(1);
  //     expect(result.name).toBe('pikachu');
  // })
})
