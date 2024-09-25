import axios from 'axios';
import { useEffect, useState } from 'react';
import PopularDiv from './PopularDiv';
import './Popular.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
//import OpenMovie from '../../Pages/OpenMovie';
import { Puff } from 'react-loader-spinner';

function Popular({ GetSelectedMovie }) {

    const [movies, setMovies] = useState([]);
    //const [selectedMovie, setSelectedMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            params: {
                api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2',
                language: 'en-US',
                page: 1
            }
        });
        console.log(response.data);
        setLoading(false);
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const handleMovieClick = (movie) => {
        //setSelectedMovie(movie);
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
            {loading && <div className="loader-container">
                <Puff
                    visible={true}
                    height="80"
                    width="80"
                    color="grey"
                    ariaLabel="puff-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>}
            {!loading && <div>
                <h2 className="popular-heading">Popular Movies</h2>
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
                    aria-label="Popular Movies"
                >
                    {renderMovies()}
                </Splide>

                {/* <OpenMovie selectedMovie={selectedMovie} /> */}
            </div>}
        </>
    );
}

export default Popular;