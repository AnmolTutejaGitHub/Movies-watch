import './headerMovie.css';
function HeaderMovie({ movie, GetSelectedMovie }) {
    function handleClick() {
        GetSelectedMovie(movie);
    }
    return (
        <div class="header-movie" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
        }}>

            <div className="header-details">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <button onClick={handleClick}>Watch</button>
            </div>
        </div >
    );
}
export default HeaderMovie;