import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResult from "../../Components/SearchBar/SearchResult";
import { useState } from "react";

function SearchBarPage({ GetSelectedMovie }) {
    const [searchTerm, setSerachTerm] = useState('');

    function setSearchTerm(term) {
        setSerachTerm(term);
    }
    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} />
            <SearchResult term={searchTerm} GetSelectedMovie={GetSelectedMovie} />
        </div>
    );
}
export default SearchBarPage;