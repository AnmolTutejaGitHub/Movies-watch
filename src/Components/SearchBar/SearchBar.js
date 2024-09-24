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
        <div className='navigation'>
            <div className='nav-bar'>
                <input placeholder="Search Movies" type="text" onChange={handleSearch} className="search-input"></input>
                {/* <button className="login-btn">Login</button> */}
            </div>
        </div>
    );
}
export default SearchBar;