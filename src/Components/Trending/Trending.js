import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularDiv from '../Popular/PopularDiv';
import '../Popular/PopularDiv.css';
//import OpenMovie from '../../Pages/OpenMovie';

// endpoint : https://api.themoviedb.org/3/trending/{media_type}/{time_window}
function Trending({ GetSelectedMovie }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
            params: {
                api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2',
                language: 'en-US',
                page: 1
            }
        });
        console.log(response.data);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
        GetSelectedMovie(movie);
    };

    const renderMovies = () => {
        return movies.map((movie) => (
            <PopularDiv movie={movie} key={movie.id} onClick={handleMovieClick} />
        ));
    };

    return (
        <div>
            <h2 className="popular-heading">Trending Movies</h2>
            <div className="popular-div">{renderMovies()}</div>

            {/* <OpenMovie selectedMovie={selectedMovie} /> */}
        </div>
    );
}
export default Trending;