// endpoint : const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY";
import { useState, useEffect } from "react";
import PopularDiv from "../Popular/PopularDiv";
import '../Popular/Popular.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Upcoming() {
    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    const [movies, SetMovies] = useState([]);

    async function fetchUpcoming() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        SetMovies(data.results);
    }

    useEffect(() => {
        fetchUpcoming();
    }, []);

    const renderUpcoming = movies.map((movie) => {
        return (
            <SplideSlide key={movie.id}>
                <PopularDiv movie={movie} onClick={() => handleClick(movie)} />
            </SplideSlide>
        );
    });

    function handleClick(movie) {
    }

    return (
        <div>
            <h2 className="popular-heading">Upcoming Movies</h2>
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
                aria-label="Upcoming Movies"
            >
                {renderUpcoming}
            </Splide>
        </div>
    );
}

export default Upcoming;