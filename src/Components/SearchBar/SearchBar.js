import './SearchBar.css';
function SearchBar({ setSearchTerm, onChange, onClearSearch }) {

    function handleSearch(event) {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() !== '') {
            onChange();
        } else {
            onClearSearch();
        }
    }


    return (
        <div className='navigation nav-bar'>
            <a className="navbar-a logo" href="#">CineRealize</a>
            <input placeholder="Search Movies" type="text" onChange={handleSearch} className="search-input"></input>
            <a className="navbar-a" href="#">All Movies</a>
            <a className="navbar-a" href="#">Popular Movies</a>
            <a className="navbar-a" href="#">Filter</a>
            <div className='login-signup'>
                <button className="login-btn">Login</button>
                <button className="sign-btn">Sign up</button>
            </div>
        </div>
    );
}
export default SearchBar;