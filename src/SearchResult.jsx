import React, { useEffect, useState } from "react";

function SearchResult({ query }) {
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
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <>
            <h1>¡Pokémon encontrado!</h1>
            <p>Nombre: {data.name}</p>
            <p>ID: {data.id}</p>
            <img src={data.sprites.front_default} alt={data.name} />
        </>
      )}
    </div>
  );
}

export default SearchResult;