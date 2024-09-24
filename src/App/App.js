import Popular from "../Components/Popular/Popular";
import './App.css';
import Trending from '../Components/Trending/Trending';
import { useState } from "react";
import OpenMovie from "../Pages/OpenMovie";
import SearchBar from "../Components/SearchBar/SearchBar";
function App() {
    const [selectedMovie, SetSelectedMovie] = useState(null);

    function GetSelectedMovie(movie) {
        SetSelectedMovie(movie);
    }
    return (
        <div>
            <div className="landing-page">
                <Popular GetSelectedMovie={GetSelectedMovie} />
                <Trending GetSelectedMovie={GetSelectedMovie} />
            </div>

            <SearchBar GetSelectedMovie={GetSelectedMovie} />


            {/* I have to route openmovies  */}
            {selectedMovie && <OpenMovie selectedMovie={selectedMovie} />}




        </div>
    );
}
export default App;