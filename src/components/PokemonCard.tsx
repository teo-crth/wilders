import React from 'react';

type Pokemon = {
    name: string;
    imgSrc?: string;
}
const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {


    return (
        <figure>
            {pokemon.imgSrc? <img src={pokemon.imgSrc} alt="Image d'un pokémon Bulbasaur" /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};


export default PokemonCard;

