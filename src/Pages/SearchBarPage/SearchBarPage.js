import SearchBar from "../../Components/SearchBar/SearchBar";
import SearchResult from "../../Components/SearchBar/SearchResult";
import { useState } from "react";

function SearchBarPage({ GetSelectedMovie, onChange, onClearSearch, handleAllMovies, setFilter, search, user, signupSetter, loginSetter, children, toggleWatchList, SetUser }) {
    const [searchTerm, setSerachTerm] = useState('');

    function setSearchTerm(term) {
        setSerachTerm(term);
    }
    return (
        <div>
            <SearchBar setSearchTerm={setSearchTerm} onChange={onChange} onClearSearch={onClearSearch} handleAllMovies={handleAllMovies} term={searchTerm} setFilter={setFilter} user={user} loginSetter={loginSetter} signupSetter={signupSetter} toggleWatchList={toggleWatchList} SetUser={SetUser}>
                {children}
            </SearchBar>
            {search && <SearchResult term={searchTerm} GetSelectedMovie={GetSelectedMovie} user={user} />}
        </div>
    );
}
export default SearchBarPage;