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
import Margin from '../Components/Margin/Margin';
import AllMovies from "../Components/AllMovies/AllMovies";
import Filter from '../Pages/Filter/Filter';
import { Puff } from 'react-loader-spinner';
import LoginSignUp from "../Components/loginSignup/loginSignUp";
import Watchlist from "../Components/watchlist/Watchlist";
import MoviesSearch from "../Pages/MoviesSearch";
import { Analytics } from "@vercel/analytics/react"

// https://cors-anywhere.herokuapp.com/ as proxy 

// https://splidejs.com/ for slide show

function App() {
    const [selectedMovie, SetSelectedMovie] = useState(null);
    const [search, setSearch] = useState(false);
    const [AllMoviesClicked, setAllMoviesClicked] = useState(false);
    const [filter, setFilter] = useState(false);
    const [user, setUser] = useState('');
    const [login, setLogin] = useState(false);
    const [signup, setSignUp] = useState(false);
    const [watchList, setWatchList] = useState(false);
    const [series, setSeries] = useState(false);

    function GetSelectedMovie(movie) {
        SetSelectedMovie(movie);
    }

    function closeModal() {
        SetSelectedMovie(null);
    }

    function handleSearchChange() {
        setSearch(true);
    }

    function onClearSearch() {
        setSearch(false);
    }

    function handleAllMovies(set) {
        setAllMoviesClicked(set);
        setSearch(false);
        onClearSearch();
    }

    function SetFilter(set) {
        setFilter(set);
    }

    function handleUserDisplay(username) {
        setUser(username);
    }

    function loginSetter(_bool) {
        setLogin(_bool);
    }

    function signupSetter(_bool) {
        setSignUp(_bool);
    }

    function handleSubmit() {
        setLogin(false);
        setSignUp(false);
    }

    function toggleWatchList(_bool) {
        setWatchList(_bool);
    }

    function SetUser(user) {
        setUser(user);
    }

    function isLoggedIn() {
        return user.trim() != '';
    }

    function setseries(_bool) {
        setSeries(_bool);
    }

    return (
        <div>
            <div className="landing-page">

                <Analytics />
                <SearchBarPage GetSelectedMovie={GetSelectedMovie} onChange={handleSearchChange} onClearSearch={onClearSearch} handleAllMovies={handleAllMovies} setFilter={SetFilter} search={search} loginSetter={loginSetter} signupSetter={signupSetter} user={user} toggleWatchList={toggleWatchList} SetUser={SetUser} setseries={setseries}>
                </SearchBarPage>
                {/* {login && <LoginSignUp type="login" onClick={handleUserDisplay} onSubmitBtn={handleSubmit} />}
                {signup && <LoginSignUp type="signup" onClick={handleUserDisplay} onSubmitBtn={handleSubmit} />} */}
                <br /><br /><br />

                {filter &&
                    (
                        <>
                            <Margin padding="100px" />
                            <Filter />
                        </>
                    )
                }

                {/* {
                    watchList && <Watchlist user={user} GetSelectedMovie={GetSelectedMovie} isLoggedIn={isLoggedIn} />
                } */}

                {
                    series && <MoviesSearch />
                }

                {!search && !filter && !AllMoviesClicked && !watchList && !series && <div>
                    <HeaderMovies GetSelectedMovie={GetSelectedMovie} />
                    <Margin padding="80px" />
                    <Popular GetSelectedMovie={GetSelectedMovie} />
                    <Margin padding="80px" />
                    <Trending GetSelectedMovie={GetSelectedMovie} />
                    <Margin padding="80px" />
                    <TopRated GetSelectedMovie={GetSelectedMovie} />
                    <Margin padding="80px" />
                    <Genre GetSelectedMovie={GetSelectedMovie} Genre="War" />
                    <Margin padding="80px" />
                    <Genre GetSelectedMovie={GetSelectedMovie} Genre="Documentary" />
                    <Margin padding="80px" />
                    <Genre GetSelectedMovie={GetSelectedMovie} Genre="History" />
                    <Margin padding="80px" />
                    <Genre GetSelectedMovie={GetSelectedMovie} Genre="Horror" />
                    <Margin padding="80px" />
                    <Upcoming GetSelectedMovie={GetSelectedMovie} />
                    <Margin padding="80px" />
                    <Footer />
                </div>}
            </div>

            {selectedMovie && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" >
                        <OpenMovie selectedMovie={selectedMovie} />
                        <IoClose className="close-button" onClick={closeModal} />
                    </div>
                </div>
            )
            }

            {AllMoviesClicked && !filter && !watchList && <AllMovies GetSelectedMovie={GetSelectedMovie} user={user} />}

        </div >
    );
}

export default App;