import Popular from "../Components/Popular/Popular";
import './App.css';
import Trending from '../Components/Trending/Trending';
import { useState } from "react";
import OpenMovie from "../Pages/OpenMovie";
import SearchBarPage from "../Pages/SearchBarPage/SearchBarPage";

function App() {
    const [selectedMovie, SetSelectedMovie] = useState(null);

    function GetSelectedMovie(movie) {
        SetSelectedMovie(movie);
    }
    return (
        <div>
            <div className="landing-page">
                <SearchBarPage GetSelectedMovie={GetSelectedMovie} />
                <Popular GetSelectedMovie={GetSelectedMovie} />
                <Trending GetSelectedMovie={GetSelectedMovie} />
            </div>


            {/* I have to route openmovies  */}
            {selectedMovie && <OpenMovie selectedMovie={selectedMovie} />}




        </div>
    );
}
export default App;