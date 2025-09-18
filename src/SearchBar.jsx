import React, {useState} from "react";
import SearchResult from './SearchResult'

function SearchBar(){

    const [inputValue, setInputValue] = useState("");
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(inputValue);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingresar" 
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>
            <SearchResult query={query} />
        </>
    );
}

export default SearchBar;