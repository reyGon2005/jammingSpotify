import React from "react";

function Track({ data, onAdd }) {
  return (
    <>
      {data && (
        <>
          <h1>¡Pokémon encontrado!</h1>
          <p>Nombre: {data.name}</p>
          <p>ID: {data.id}</p>
          <img src={data.sprites.front_default} alt={data.name} />
          <button onClick={() => onAdd(data)}>Agregar a lista</button>
        </>
      )}
    </>
  );
}


export default Track;