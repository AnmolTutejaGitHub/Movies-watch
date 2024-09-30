import './SearchResultDiv.css';
import axios from 'axios';
import { IoIosAddCircleOutline } from "react-icons/io";

function SearchResultDiv({ movie, GetSelectedMovie, user }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
    function handleClick() {
        GetSelectedMovie(movie);
    }

    async function addToWatchList(event) {
        event.stopPropagation();

        if (user.trim() === '') {
            return;
        }

        const response = await axios.get('http://localhost:3001/users');
        const users = response.data;

        const userToUpdate = users.find(u => u.user === user);

        const AlreadyExists = userToUpdate.watchList.some(existingMovie => existingMovie.id === movie.id);
        await axios.put(`http://localhost:3001/users/${userToUpdate.id}`, {
            ...userToUpdate,
            watchList: AlreadyExists ? userToUpdate.watchList : [...userToUpdate.watchList, movie]
        });
    }


    return (
        <div className='movie-div' onClick={handleClick}>
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="search-result-img" />
            {user.trim() != '' && <IoIosAddCircleOutline className="addToWatchlist" onClick={addToWatchList} />}
        </div>
    );
}
export default SearchResultDiv;