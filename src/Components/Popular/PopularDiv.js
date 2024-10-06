import { useState } from 'react';
import './PopularDiv.css';
import MovieDetailDiv from '../MovieDetailDiv/MovieDetailDiv';


const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

function PopularDiv({ movie, onClick }) {

    const [hover, setHover] = useState(false);
    return (
        <div className='popular-div'>
            <div onClick={() => onClick(movie)} className="popular-movie" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
            </div>
            {hover && <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className='hover-movie'>
                <MovieDetailDiv movie={movie} onClick={onClick} />
            </div>}
        </div>
    );
}

export default PopularDiv;