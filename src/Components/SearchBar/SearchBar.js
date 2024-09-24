import { useState } from "react";
import SearchResult from "./SearchResult";
function SearchBar({ setSearchTerm }) {

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleSearch}></input>
        </div>
    );
}
export default SearchBar;