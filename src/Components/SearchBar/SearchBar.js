import './SearchBar.css';
function SearchBar({ setSearchTerm }) {

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }
    return (
        <div>
            <input placeholder="Search Movies" type="text" onChange={handleSearch} className="search-input"></input>
        </div>
    );
}
export default SearchBar;