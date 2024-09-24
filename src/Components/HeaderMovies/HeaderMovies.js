import { useState, useEffect } from "react";
import HeaderMovie from './HeaderMovie';
import axios from 'axios';
import './HeaderMovies.css';

function HeaderMovies({ GetSelectedMovie }) {

    const [movies, setMovies] = useState([]);
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


    const renderMovies = movies.map((movie) => {
        return <HeaderMovie movie={movie} GetSelectedMovie={GetSelectedMovie} />
    });


    return (
        <div class="header-movies">{renderMovies}</div>
    );
}
export default HeaderMovies;