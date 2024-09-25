import { useState, useEffect } from "react";
import axios from 'axios';
import './Filter.css';
import underDevelopment from '../.././Assests/underDevelopmentMeme.jpeg';


function Filter() {
    const genreMap = {
        "Action": 28,
        "Adventure": 12,
        "Animation": 16,
        "Comedy": 35,
        "Crime": 80,
        "Documentary": 99,
        "Drama": 18,
        "Family": 10751,
        "Fantasy": 14,
        "History": 36,
        "Horror": 27,
        "Music": 10402,
        "Mystery": 9648,
        "Romance": 10749,
        "Science Fiction": 878,
        "TV Movie": 10770,
        "Thriller": 53,
        "War": 10752,
        "Western": 37
    };

    const [movies, setMovies] = useState([]);
    const [Genre, setGenre] = useState('');

    const fetchMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2',
                language: 'en-US',
                page: 1,
                with_genres: genreMap[Genre]
            }
        });
        setMovies(response.data.results);
    };

    useEffect(() => {
        fetchMovies();
    }, [Genre]);

    return (
        <div className="flex-center">
            <img src={underDevelopment} className="under-devlopment"></img>
        </div>
    );
}
export default Filter;