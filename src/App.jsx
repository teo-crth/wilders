import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  const [pokemonIndex, setPokemonIndex] = useState(0); 

  const handleClickIncrement = (event) => {
    setPokemonIndex(pokemonIndex + 1);
  }

  const handleClickDecrement = (event) => {
    setPokemonIndex(pokemonIndex - 1);
  }

  return (
    <>
    < PokemonCard pokemon={ pokemonList[pokemonIndex] }/>
    {pokemonIndex > 0? <button onClick={handleClickDecrement}>Précédent</button> : null}
    {pokemonIndex < pokemonList.length - 1? <button onClick={handleClickIncrement}>Suivant</button> : null}
    </>
    
  )
}

export default App
