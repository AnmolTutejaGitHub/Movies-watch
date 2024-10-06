import './MovieDetailDiv.css';
import { FaPlay } from "react-icons/fa";
function MovieDetailDiv({ movie, onClick }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className='hover-div'>
            <div style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100px',
                borderRadius: "5px"
            }}>
            </div>
            <div className='hover-movie-detail'>
                <div className='hover-title'>{movie.title}</div>
                <div className='hover-details'>{movie.overview ? movie.overview : "Overview not available"}</div>
                <div className='hover-date'>
                    <span>Date:</span>{formatDate(movie.release_date)}
                </div>
                <div className='hover-type'>
                    <span>Type:</span>Movie
                </div>
                <div className='hover-lan'>
                    <span>lang:</span>{movie.original_language}
                </div>
            </div>
            <div className='hover-watch-now'>
                <button className='hover-watch-now-btn' onClick={() => onClick(movie)}> <FaPlay /> Watch Now</button>
            </div>
        </div>
    );
}
export default MovieDetailDiv;