import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <figure>
            {pokemon.imgSrc? <img src={pokemon.imgSrc} alt="Image d'un pokémon Bulbasaur" /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};


export default PokemonCard;

