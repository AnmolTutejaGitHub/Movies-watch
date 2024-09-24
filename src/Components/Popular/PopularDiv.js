import './PopularDiv.css';
const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

function PopularDiv({ movie, onClick }) {
    console.log(movie);
    return (
        <div >
            <div onClick={() => onClick(movie)} className="popular-movie">
                <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
            </div>
        </div>
    );
}

export default PopularDiv;