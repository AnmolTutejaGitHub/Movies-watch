import './SearchBar.css';
function SearchBar({ setSearchTerm, term, onChange, onClearSearch, handleAllMovies, setFilter }) {

    function handleSearch(event) {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() !== '') {
            onChange();
        } else {
            onClearSearch();
        }
    }

    function handleAllMoviesClick(event) {
        event.preventDefault();
        setFilter(false);
        handleAllMovies(true);
    }

    function handleHomeClicked(event) {
        setFilter(false);
        event.preventDefault();
        handleAllMovies(false);
        setSearchTerm('');
        onClearSearch();
    }

    function handleFilter() {
        setFilter(true);
    }

    return (
        <div className='navigation nav-bar'>
            <a className="navbar-a logo" href="#">CineRealize</a>
            <input placeholder="Search Movies" type="text" onChange={handleSearch} className="search-input" value={term}></input>
            <a className="navbar-a" href="#" onClick={handleHomeClicked}>Home</a>
            <a className="navbar-a" href="#" onClick={handleAllMoviesClick}>All Movies</a>
            <a className="navbar-a" href="#" onClick={handleFilter}>Filter</a>
            <div className='login-signup'>
                <button className="login-btn">Login</button>
                <button className="sign-btn">Sign up</button>
            </div>
        </div>
    );
}
export default SearchBar;