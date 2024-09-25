// endpoint : https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=35
import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularDiv from '../Popular/PopularDiv';
import '../Popular/PopularDiv.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Puff } from 'react-loader-spinner';

function Genre({ GetSelectedMovie, Genre }) {
    const genreMap = {
        "Action": 28,
        "Adventure": 12,
        "Animation": 16,
        "Comedy": 35,
        "Crime": 80,
        "Documentary": 99,
        "Drama": 18,
        "Family": 10751,
        "Fantasy": 14,
        "History": 36,
        "Horror": 27,
        "Music": 10402,
        "Mystery": 9648,
        "Romance": 10749,
        "Science Fiction": 878,
        "TV Movie": 10770,
        "Thriller": 53,
        "War": 10752,
        "Western": 37
    };

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2',
                language: 'en-US',
                page: 1,
                with_genres: genreMap[Genre]
            }
        });
        console.log(response.data);
        setLoading(false);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, [Genre]);

    const handleMovieClick = (movie) => {
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
        <>
            {loading &&
                <div className="loader-container">
                    <Puff
                        visible={true}
                        height="80"
                        width="80"
                        color="grey"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }
            {!loading && <div>
                <h2 className="popular-heading">{Genre} {Genre !== "Documentary" && Genre !== "History" && "Movies"}</h2>
                <Splide
                    options={{
                        rewind: true, perPage: 6.5, breakpoints: {
                            768: {
                                perPage: 2
                            },
                            1024: {
                                perPage: 4
                            },
                            500: {
                                perPage: 1
                            }
                        }
                    }}
                    aria-label={`${Genre} Movies`}
                >
                    {renderMovies()}
                </Splide>
            </div>}
        </>

    );
}

export default Genre;