import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResult from "../../Components/SearchBar/SearchResult";
import { useState } from "react";

function SearchBarPage({ GetSelectedMovie, onChange, onClearSearch, handleAllMovies }) {
    const [searchTerm, setSerachTerm] = useState('');

    function setSearchTerm(term) {
        setSerachTerm(term);
    }
    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} onChange={onChange} onClearSearch={onClearSearch} handleAllMovies={handleAllMovies} />
            <SearchResult term={searchTerm} GetSelectedMovie={GetSelectedMovie} />
        </div>
    );
}
export default SearchBarPage;