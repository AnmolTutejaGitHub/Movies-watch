import { useState, useEffect } from "react";
import PopularDiv from "../Popular/PopularDiv";
import '../Popular/Popular.css';

// endpoint : const upcomingMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=YOUR_API_KEY";
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
        return <PopularDiv movie={movie} onClick={handleClick} />
    })

    function handleClick() {

    }


    return (
        <div>
            <h2 className="popular-heading">Upcoming Movies</h2>
            <div className="popular-div">{renderUpcoming}</div>
        </div>
    );
}
export default Upcoming;