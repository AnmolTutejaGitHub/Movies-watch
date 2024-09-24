import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularDiv from '../Popular/PopularDiv';
import '../Popular/PopularDiv.css';
//endpoint : https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY
function TopRated({ GetSelectedMovie }) {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const fetchMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
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
            <h2 className="popular-heading">Top Rated Movies</h2>
            <div className="popular-div">{renderMovies()}</div>
        </div>
    );
}
export default TopRated;