//endpoint : GET https://api.themoviedb.org/3/search/movie?api_key={api_key}&query={search_term}&language={language}
import { useState, useEffect } from "react";
import SearchResultDiv from "./SearchResultDiv";
import './SearchResult.css';

function SearchResult({ term, GetSelectedMovie }) {
    const [searchResults, setSearchResults] = useState([]);
    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';

    useEffect(() => {
        async function fetchResult() {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}&language={language}`);
            const data = await response.json();
            console.log(data);
            setSearchResults(data.results);
        }
        fetchResult();
    }, [term])

    const renderMovies = searchResults.filter(movie => movie.poster_path).map((movie) => {
        return <SearchResultDiv key={movie.id} movie={movie} GetSelectedMovie={GetSelectedMovie} />;
    });


    return (
        <div>
            {searchResults !== [] && <div className="result-holder">{renderMovies}</div>}
        </div>
    );
}
export default SearchResult;