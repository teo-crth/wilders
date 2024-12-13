import React from 'react';

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
interface NavBarProps {
setPokemonIndex: (index: number) => void;
pokemonList: Pokemon[];
handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Navbar = ({pokemonList, setPokemonIndex, handleClick}: NavBarProps) => {
    return (
        <nav>
        {pokemonList.map((pokemon: Pokemon) => {
          return <button id={pokemon.name} onClick={handleClick}>{pokemon.name}</button>
          })
        }
        </nav>
    );
}

export default Navbar;
