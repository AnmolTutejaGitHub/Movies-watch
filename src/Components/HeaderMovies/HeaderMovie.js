import './headerMovie.css';
import { FaPlay } from "react-icons/fa6";

function HeaderMovie({ movie, GetSelectedMovie }) {
    function handleClick() {
        GetSelectedMovie(movie);
    }
    return (
        <div class="header-movie" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '700px',
        }}>

            <div className="header-details">
                <h1>{movie.title}</h1>
                <p className="movie-overview">{movie.overview}</p>
                <button onClick={handleClick} className='cursor-pointer'> <FaPlay className='play-movie' /> Watch Now</button>
            </div>
        </div >
    );
}
export default HeaderMovie;