import Popular from "../Components/Popular/Popular";
import './App.css';
import Trending from '../Components/Trending/Trending';
import { useState } from "react";
import OpenMovie from "../Pages/OpenMovie";
import SearchBarPage from "../Pages/SearchBarPage/SearchBarPage";
import Upcoming from "../Components/Upcoming/Upcoming";
import TopRated from "../Components/TopRated/TopRated";
import Genre from "../Components/Genre/Genre";

function App() {
    const [selectedMovie, SetSelectedMovie] = useState(null);

    function GetSelectedMovie(movie) {
        SetSelectedMovie(movie);
    }
    return (
        <div>
            <div className="landing-page">
                <SearchBarPage GetSelectedMovie={GetSelectedMovie} />
                <br /><br /><br />
                <Popular GetSelectedMovie={GetSelectedMovie} />
                <br /><br /><br />
                <Trending GetSelectedMovie={GetSelectedMovie} />
                <br /><br /><br />
                <TopRated GetSelectedMovie={GetSelectedMovie} />
                <br /><br /><br />
                <Upcoming />
                <br /><br /><br />
                <Genre GetSelectedMovie={GetSelectedMovie} Genre="War" />
            </div>


            {/* I have to route openmovies  */}
            {selectedMovie && <OpenMovie selectedMovie={selectedMovie} />}




        </div>
    );
}
export default App;