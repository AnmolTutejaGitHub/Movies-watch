//endpoint : https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY
import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularDiv from '../Popular/PopularDiv';
import '../Popular/PopularDiv.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
            <SplideSlide key={movie.id}>
                <PopularDiv movie={movie} onClick={() => handleMovieClick(movie)} />
            </SplideSlide>
        ));
    };

    return (
        <div>
            <h2 className="popular-heading">Top Rated Movies</h2>
            <Splide
                options={{
                    rewind: true, perPage: 6.5, breakpoints: {
                        768: {
                            perPage: 2
                        },
                        1024: {
                            perPage: 4
                        }
                    }
                }}
                aria-label="Top Rated Movies"
            >
                {renderMovies()}
            </Splide>
        </div>
    );
}

export default TopRated;