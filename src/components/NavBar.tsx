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

const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const pokemonName = event.currentTarget.id;

    // Vérifiez si le Pokémon sélectionné est "pikachu"
    if (pokemonName === "pikachu") {
      alert("pika pikachu !!!");
    }

    // Appelez la fonction `handleClick` fournie par le parent
    handleClick(event);
  };

const Navbar = ({pokemonList, setPokemonIndex, handleClick}: NavBarProps) => {
    return (
        <nav>
        {pokemonList.map((pokemon: Pokemon) => {
          return <button 
          id={pokemon.name} 
          key={pokemon.name}
          onClick={handleButtonClick}>{pokemon.name}</button>
          })
        }
        </nav>
    );
}

export default Navbar;
