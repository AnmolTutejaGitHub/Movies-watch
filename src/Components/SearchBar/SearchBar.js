import { useState } from 'react';
import './SearchBar.css';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";

function SearchBar({ setSearchTerm, term, onChange, onClearSearch, handleAllMovies, setFilter, user, signupSetter, loginSetter, children, toggleWatchList, SetUser, setseries }) {

    const [Bars, setBars] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    function handleSearch(event) {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.trim() !== '') {
            setFilter(false);
            handleAllMovies(false);
            onChange();
        } else {
            onClearSearch();
        }
    }

    function handleAllMoviesClick(event) {
        event.preventDefault();
        setFilter(false);
        handleAllMovies(true);
        toggleWatchList(false);
        setSearchTerm('');
        setseries(false);
    }

    function handleHomeClicked(event) {
        event.preventDefault();
        setFilter(false);
        handleAllMovies(false);
        toggleWatchList(false);
        setSearchTerm('');
        onClearSearch();
        setseries(false);
    }

    function handleFilter() {
        setFilter(true);
        toggleWatchList(false);
        setSearchTerm('');
        setseries(false);
    }


    function handleBarsClick() {
        setBars(!Bars);
        setseries(false);
    }

    function handleLogin() {
        loginSetter(true);
        signupSetter(false);
    }

    function handleSignup() {
        signupSetter(true);
        loginSetter(false);
    }

    function handleWatchList() {
        toggleWatchList(true);
        setFilter(false);
        setSearchTerm('');
        setseries(false);
    }

    function handleSeries() {
        setseries(true);
    }

    function signOut(e) {
        e.stopPropagation();
        SetUser("");
    }

    return (
        <div className={`navigation nav-bar ${Bars ? "navigation-bars-true" : "navigation-bars-false"}`}>
            <a className="navbar-a logo" href="#">Binged</a>
            <input placeholder="Search Movies" type="text" onChange={handleSearch} className={`search-input ${Bars ? "search-input-bars-true" : "search-input-bars-false"}`} value={term}></input>
            <a className={`navbar-a ${Bars ? "" : "navbar-a-bars-false"}`} href="#" onClick={handleHomeClicked}>Home</a>
            <a className={`navbar-a ${Bars ? "" : "navbar-a-bars-false"}`} href="#" onClick={handleAllMoviesClick}>All Movies</a>
            <a className={`navbar-a ${Bars ? "" : "navbar-a-bars-false"}`} href="#" onClick={handleWatchList}>WatchList</a>
            <a className={`navbar-a ${Bars ? "" : "navbar-a-bars-false"}`} href="#" onClick={handleFilter} >Filter</a>
            <a className={`navbar-a ${Bars ? "" : "navbar-a-bars-false"}`} href="#" onClick={handleSeries} >Series</a>

            {user.trim() == '' && <div className={`login-signup ${Bars ? "login-signup-bars-true" : "login-signup-bars-false"}`}>
                <button className="login-btn" onClick={handleLogin}>Login</button>
                <button className="sign-btn" onClick={handleSignup}>Sign up</button>
                <div className='user-form'>
                    {children}
                </div>
            </div>}

            {
                user &&
                <>
                    <div onClick={toggleVisibility} >
                        {user}{" "}
                        <FaAngleDown />
                        {isVisible && <div className="sign-out" onClick={signOut}>
                            <FaSignOutAlt />
                            Sign Out</div>}
                    </div>
                </>
            }


            {!Bars && <FaBars className={`bars ${Bars ? "bars-bars-true" : ""}`} onClick={handleBarsClick} />}
            {Bars && <IoClose className={`bars ${Bars ? "bars-bars-true" : ""}`} onClick={handleBarsClick} />}
        </div >
    );
}
export default SearchBar;