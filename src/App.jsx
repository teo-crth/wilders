import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {
  const [isOnline, setIsOnline] = useState(false)

  return (
    <>
    < PokemonCard />
    </>
  )
}

export default App
