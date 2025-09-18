import React, { useState } from 'react'
import './App.css'
import TrackList from './TrackList'
import SearchBar from './SearchBar'

function App() {
  const [lsitaPokemon, setListaPokemon] = useState([]);

  function addPokemon(pokemon) {
    setListaPokemon([...lsitaPokemon, pokemon]);
  }

  function clearList() {
    alert("lista vacia")
    setListaPokemon([]);
  }

  return (
    <>
      <SearchBar onAdd={addPokemon}/>
      <TrackList listaPokemon={lsitaPokemon} onClear={clearList}/>
    </>
  )
}

export default App;