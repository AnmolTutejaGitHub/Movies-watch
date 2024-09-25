import { useState, useEffect } from 'react';
import SearchResultDiv from '../SearchBar/SearchResultDiv';
import './AllMovies.css';

function AllMovies({ GetSelectedMovie }) {
    const [allMovies, setAllMovies] = useState([]);
    const [pages, setPages] = useState(1);

    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    async function fetchMovies() {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${pages}`
        );
        const data = await response.json();
        setAllMovies([...allMovies, ...data.results]);
    }

    useEffect(() => {
        fetchMovies();
    }, [pages]);

    function loadMore() {
        setPages(pages + 1);
    }

    const renderMovies = allMovies.filter(movie => movie.poster_path).map((movie) => {
        return (
            <SearchResultDiv
                key={movie.id}
                movie={movie}
                GetSelectedMovie={GetSelectedMovie}
            />
        );
    });

    return (
        <div>
            <div className='allmoviesDiv'>{renderMovies}</div>
            <div onClick={loadMore} className='load-more'>Load More</div>
        </div>
    );
}

export default AllMovies;