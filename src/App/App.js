import Popular from "../Components/Popular/Popular";
import './App.css';
import Trending from '../Components/Trending/Trending';
import { useState } from "react";
import OpenMovie from "../Pages/OpenMovie";
import SearchBarPage from "../Pages/SearchBarPage/SearchBarPage";
import Upcoming from "../Components/Upcoming/Upcoming";
import TopRated from "../Components/TopRated/TopRated";
import Genre from "../Components/Genre/Genre";
import Footer from "../Components/Footer/Footer";
import HeaderMovies from "../Components/HeaderMovies/HeaderMovies";
import { IoClose } from "react-icons/io5";

function App() {
    const [selectedMovie, SetSelectedMovie] = useState(null);

    function GetSelectedMovie(movie) {
        SetSelectedMovie(movie);
    }

    function closeModal() {
        SetSelectedMovie(null);
    }

    return (
        <div>
            <div className="landing-page">
                <SearchBarPage GetSelectedMovie={GetSelectedMovie} />
                <br /><br /><br />
                <HeaderMovies GetSelectedMovie={GetSelectedMovie} />
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
                <br /><br /><br />
                <Genre GetSelectedMovie={GetSelectedMovie} Genre="Documentary" />
                <br /><br /><br />
                <Genre GetSelectedMovie={GetSelectedMovie} Genre="History" />
                <br /><br /><br />
                <Genre GetSelectedMovie={GetSelectedMovie} Genre="Horror" />
                <br /><br /><br />
                <Footer />
            </div>

            {selectedMovie && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" >
                        <OpenMovie selectedMovie={selectedMovie} />
                        <IoClose className="close-button" onClick={closeModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;