import React, { useState } from 'react'
import './App.css'
import TrackList from './TrackList'

import SearchBar from './SearchBar'

function App(prop) {
  
  const [lsitaPokemon, setListaPokemon] = useState([]);

  function addPokemon(){
    setListaPokemon([...lsitaPokemon, pokemon]);
  }

  return (
    <>
      <SearchBar onAdd={addPokemon}/>
      <TrackList listaPokemon={lsitaPokemon}/>
    </>
  )
}

export default App
