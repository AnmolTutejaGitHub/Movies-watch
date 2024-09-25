// endpoint : const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY";
// above endpoint is not giving upcoming but giving already realsed 
// so using this endpoint https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${pages}
// and sorting it 
import { useState, useEffect } from "react";
import PopularDiv from "../Popular/PopularDiv";
import '../Popular/Popular.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Upcoming({ GetSelectedMovie }) {
    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    const [movies, SetMovies] = useState([]);
    const totalPages = 3;

    async function fetchUpcoming() {
        let allMovies = [];

        for (let page = 1; page <= totalPages; page++) {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}`);
            const data = await response.json();
            allMovies = allMovies.concat(data.results);
        }

        SetMovies(allMovies);
    }
    useEffect(() => {
        fetchUpcoming();
    }, []);

    const renderUpcoming = movies.filter(movie => movie.poster_path).map((movie) => {
        return (
            <SplideSlide key={movie.id}>
                <PopularDiv movie={movie} onClick={() => handleClick(movie)} />
            </SplideSlide>
        );
    });

    function handleClick(movie) {
        GetSelectedMovie(movie);
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