import './SearchBar.css';
function SearchBar({ setSearchTerm, onChange, onClearSearch, handleAllMovies }) {

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
        handleAllMovies(true);
    }

    function handleHomeClicked(event) {
        event.preventDefault();
        handleAllMovies(false);
    }

    return (
        <div className='navigation nav-bar'>
            <a className="navbar-a logo" href="#">CineRealize</a>
            <input placeholder="Search Movies" type="text" onChange={handleSearch} className="search-input"></input>
            <a className="navbar-a" href="#" onClick={handleHomeClicked}>Home</a>
            <a className="navbar-a" href="#" onClick={handleAllMoviesClick}>All Movies</a>
            <a className="navbar-a" href="#">Filter</a>
            <div className='login-signup'>
                <button className="login-btn">Login</button>
                <button className="sign-btn">Sign up</button>
            </div>
        </div>
    );
}
export default SearchBar;