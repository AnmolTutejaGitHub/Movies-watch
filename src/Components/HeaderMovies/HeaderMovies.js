import { useState, useEffect } from "react";
import HeaderMovie from './HeaderMovie';
import axios from 'axios';
import './HeaderMovies.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Audio } from 'react-loader-spinner'

function HeaderMovies({ GetSelectedMovie }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const renderMovies = movies.map((movie) => (
        <SplideSlide key={movie.id}>
            <HeaderMovie movie={movie} GetSelectedMovie={GetSelectedMovie} />
        </SplideSlide>
    ));

    return (
        <>
            {loading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />}

            {!loading && <Splide
                options={{ rewind: true, perPage: 1, gap: '1rem' }}
                aria-label="Top Rated Movies">
                {renderMovies}
            </Splide>}
        </>
    );
}

export default HeaderMovies;