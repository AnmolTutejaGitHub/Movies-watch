import './SearchResultDiv.css';

function SearchResultDiv({ movie, GetSelectedMovie }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
    function handleClick() {
        GetSelectedMovie(movie);
    }
    return (
        <div className='movie-div' onClick={handleClick}>
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="search-result-img" />
        </div>
    );
}
export default SearchResultDiv;