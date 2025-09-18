import React, { useEffect, useState } from "react";
import Track from './Track'

function SearchResult({ query , onAdd}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
        setData(null);
        setError(null);
        return;
    }

    const fetchPokemon = async () => {
        setLoading(true);
        setError(null);

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`No se encontró el Pokémon: ${query}`);
            }

            const pokemonData = await response.json();
            setData(pokemonData);
        } catch(e) {
            setError(e.message);
            setData(null);
        } finally {
            setLoading(false);
        }
    }
    
    fetchPokemon();

  }, [query]);

  return (
    <div className="Resultado">
        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Track data={data} onAdd={onAdd}/>
    </div>
  );
}

export default SearchResult;