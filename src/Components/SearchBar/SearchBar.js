import { useState } from "react";
import SearchResult from "./SearchResult";
function SearchBar({ GetSelectedMovie }) {
    const [searchTerm, setSerachTerm] = useState('');

    function handleSearch(event) {
        setSerachTerm(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleSearch}></input>
            <SearchResult term={searchTerm} GetSelectedMovie={GetSelectedMovie} />
        </div>
    );
}
export default SearchBar;