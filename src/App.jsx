import { useState } from 'react'
import './App.css'
import HelloWorld from './hello'
import  UserContext from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const [isOnline, setIsOnline] = useState(false)

  return (
    <>
      < UserContext.Provider value={{ isOnline, setIsOnline }}>
        <UserProfile />;
      </UserContext.Provider>
    </>
  )
}

export default App
