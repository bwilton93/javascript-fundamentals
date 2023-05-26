// Create a file, api.js which exports a function fetchPokemon. This function should:
// Take the name of a Pokémon as an argument
// Use fetch to make a HTTP request to https://pokeapi.co/api/v2/pokemon/<pokemonname>
// Once the fetch has completed, then convert the response to JSON
// Once the response is converted to JSON, then log out the data.

function fetchPokemon(pokemon) {
  pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then ((data) => {
      return returnPokemon = {
        name: data["name"],
        id: data["id"],
        height: data["height"],
        weight: data["weight"],
        // types: data["types"][0]["type"]["name"]
        types: data.types.map(element => element.type.name)
      }; 
    });
    return pokemon;
}

fetchPokemon('pikachu')
  .then((pokemon) => console.log(pokemon));

fetchPokemon('charizard')
  .then((pokemon) => console.log(pokemon));

module.exports = fetchPokemon;
