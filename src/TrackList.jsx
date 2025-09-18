import React from "react";

function TrackList({ listaPokemon, onClear }) {
  return (
    <>
      <h2>Lista Pokemones</h2>
      <button onClick={onClear}>Limpiar lista</button>
      <ul>
        {listaPokemon.map((poke) => (
          <li key={poke.id}>
            {poke.name}
            <img src={poke.sprites.front_default} alt={poke.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TrackList;