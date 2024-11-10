import { useState, useEffect } from "react";
import axios from 'axios';
import SearchResultDiv from "../SearchBar/SearchResultDiv";
import './watchlist.css';
import { ImCross } from "react-icons/im";

function Watchlist({ user, GetSelectedMovie, isLoggedIn }) {
    const [logined, setLogined] = useState(false);
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        if (user.trim() !== '') {
            setLogined(true);
            renderWatchList();
        } else {
            setLogined(false);
            setWatchlist([]);
        }
    }, []);

    async function renderWatchList() {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/getWatchList`, {
            username: user
        });
        setWatchlist(response.data);
    }

    async function deleteFromWatchlist(movie) {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/delWatchList`, {
            username: user,
            movie_id: movie.id
        });

        const updatedWatchlist = watchlist.filter(m => m.id !== movie.id);
        setWatchlist(updatedWatchlist);
    }

    const loggedIn = isLoggedIn();

    return (
        <div className="watchlists-div">
            {watchlist.length == 0 && !loggedIn && <p>Please login first...</p>}
            {watchlist.length == 0 && loggedIn && <p className="empty-watchlist">Watchlist is empty....</p>}
            {watchlist != [] &&
                watchlist.map((movie) => (
                    <div key={movie.id} className="watchlist-div">
                        <SearchResultDiv movie={movie} user="" GetSelectedMovie={GetSelectedMovie} />
                        <ImCross onClick={() => deleteFromWatchlist(movie)} className="watchlist-delete-btn"></ImCross>
                    </div>
                ))
            }
        </div >
    );
}

export default Watchlist;