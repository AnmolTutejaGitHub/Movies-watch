import './SearchResultDiv.css';
import axios from 'axios';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchResultDiv({ movie, GetSelectedMovie, user }) {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
    const [hover, setHover] = useState(false);

    const notify = () => toast.success("Added to watchlist");

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
        notify();
    }


    function handleClickBtn() {
        setHover(false);
        handleClick();
    }
    return (
        <div className='movie-div'>
            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="search-result-img" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
                style={hover ? { filter: 'blur(1px) brightness(0.9)', transform: 'scale(1.1)' } : { filter: 'none', transform: 'scale(1)' }} />

            <div className='movie-rating' style={{ right: user.trim() !== '' ? "50px" : "10px" }}>
                <FaStar className="movie-rating-star" />
                <div>{movie.vote_average.toFixed(1)}</div>
            </div>

            {hover && user.trim() != '' && <>
                <IoIosAddCircleOutline className="addToWatchlist" onClick={addToWatchList} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
            </>}
            {hover && <button onClick={handleClickBtn} className='cursor-pointer movie-btn' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> <FaPlay className='play-movie' /> Watch Now</button>}
            <ToastContainer />
        </div >
    );
}
export default SearchResultDiv;