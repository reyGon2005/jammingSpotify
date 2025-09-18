import React from "react";

function TrackList(prop){
    return (
        <>
            <h2>Lista Pokemones</h2>
            <ul>
                {prop.listaPokemon.map((poke)=>(
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