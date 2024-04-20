import React, { useState, useEffect } from "react";

function PokemonApp() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(undefined);
  const [cachedPokemon, setCachedPokemons] = useState({});

  const getPokemonList = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const list = await response.json();
      setPokemonList(list.results);
    } catch (error) {
      console.error("Error fetching pokemon list:", error);
    }
  };
  useEffect(() => {
    // Fetch list of pokemons
    getPokemonList();
  }, []);

  const getPokemonDetails = async (url) => {
    try{
        const response = await fetch(url);
        const details = await response.json();
        setPokemonDetails(details);
        setCachedPokemons({
            ...cachedPokemon,
            [url]: details
        })
    }catch(error){
        console.error("Error fetching pokemon details:", error);
    }
  }

  const fetchPokemonDetails = (url) => {
    if (cachedPokemon[url]) {
      setPokemonDetails(cachedPokemon[url]);
    }else{
        getPokemonDetails(url);
    }
  };

  const handlePokemonSelect = (event) => {
    const selectedPokemonUrl = event.target.value;
    setSelectedPokemon(selectedPokemonUrl);
    if(selectedPokemonUrl){
        fetchPokemonDetails(selectedPokemonUrl);
    }else{
        setPokemonDetails(undefined);
    }
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <select value={selectedPokemon} onChange={handlePokemonSelect}>
        <option value="">Select a Pokemon</option>
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {pokemonDetails && (
        <div>
          <h2>{pokemonDetails.name}</h2>
          <h3>Abilities:</h3>
          <ul>
            {pokemonDetails.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonApp;
