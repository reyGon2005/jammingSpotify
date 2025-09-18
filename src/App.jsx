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
    <div className="App-container">
      <div className="left-panel">
        <SearchBar onAdd={addPokemon}/>
      </div>
      <div className="right-panel">
        <TrackList listaPokemon={lsitaPokemon} onClear={clearList}/>
      </div>
    </div>
  )
}

export default App;