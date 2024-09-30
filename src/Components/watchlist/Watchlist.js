import { useState, useEffect } from "react";
import axios from 'axios';
import SearchResultDiv from "../SearchBar/SearchResultDiv";
import './watchlist.css';

function Watchlist({ user, GetSelectedMovie }) {
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
        const response = await axios.get('http://localhost:3001/users');
        const users = response.data;

        const userToUpdate = users.find(u => u.user === user);
        if (userToUpdate) {
            setWatchlist(userToUpdate.watchList);
        }
    }

    return (
        <div class="watchlists-div">
            {watchlist.map((movie) => (
                <SearchResultDiv key={movie.id} movie={movie} user="" GetSelectedMovie={GetSelectedMovie} />
            ))}
        </div>
    );
}

export default Watchlist;