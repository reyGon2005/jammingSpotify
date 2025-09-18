import React, {useState} from "react";
import SearchResult from './SearchResult'
import "./App.css";

function SearchBar({onAdd}){

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
                <button className="boton-buscar" type="submit">Buscar</button>
            </form>
            <SearchResult query={query} onAdd={onAdd}/>
        </>
    );
}

export default SearchBar;