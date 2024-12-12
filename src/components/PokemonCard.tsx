import React from 'react';

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

const PokemonCard = () => {

    const pokemon = pokemonList[0];

    return (
        <figure>
            {pokemon.imgSrc? <img src={pokemon.imgSrc} alt="Image d'un pokémon Bulbasaur" /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};


export default PokemonCard;

