import { useEffect, useState } from 'react';
import './OpenMovie.css';
import { MdHd } from "react-icons/md";
import { PiSubtitlesFill } from "react-icons/pi";
import { LiaAudioDescriptionSolid } from "react-icons/lia";
import { TbRating18Plus } from "react-icons/tb";


function OpenMovie({ selectedMovie }) {
    // console.log(selectedMovie.id);
    const release_date_string = selectedMovie.release_date || "";
    let release_year = '';
    if (release_date_string) {
        release_year = release_date_string.substring(0, 4);
    }


    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);

    const API_KEY = "ba7953e31d9a9e4bbd5bc6729366b6a2";
    const fetchGenres = async () => {
        const genreResponse = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        const genreData = await genreResponse.json();
        //console.log(genreData);
        setGenres(genreData.genres);
    };

    const fetchCast = async () => {
        try {
            const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${selectedMovie.id}/credits?api_key=${API_KEY}`);
            const castData = await castResponse.json();
            // console.log(castData)
            setCast(castData.cast);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchGenres();
        fetchCast();
    }, [selectedMovie.id])

    const renderGenres = genres.map((genre, index) => (
        <div className='inline-display'>
            {genre.name}
            {index < genres.length - 1 && '  ,  '}
        </div>
    ));

    const renderCast = cast.map((c, index) => (
        <div className='inline-display'>
            {c.name}
            {index < cast.length - 1 && '  ,  '}
        </div>
    ));

    return (
        <div className="movie-display">

            <iframe
                className="movie-frame"
                src={`https://vidsrc.xyz/embed/movie?tmdb=${selectedMovie.id}`}
                style={{ width: "100%", aspectRatio: "16/9" }}
                referrerPolicy="origin"
                allowFullScreen
                title={selectedMovie.title}
            >
            </iframe>

            <div className="movie-details">
                <div className="left">
                    <div className="movie-minor">
                        <p className='white-color'>{release_year}</p>
                        <MdHd className='white-color pointer-cursor' />
                        <LiaAudioDescriptionSolid className="audio-description white-color pointer-cursor" />
                        <PiSubtitlesFill className='white-color pointer-cursor' />
                        {selectedMovie.adult && <TbRating18Plus />}
                    </div>
                    <div className='bold'>{selectedMovie.original_title}</div>
                    <p>{selectedMovie.overview}</p>
                </div>

                <div className='right'>
                    {genres !== [] && <div className='genre flex-row'><span className='white-color span'>Genre : </span>{renderGenres}</div>}
                    {cast !== [] && <div className='cast flex-row'><span className='white-color span'>Cast : </span>{renderCast}</div>}
                </div>
            </div>
            <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }} className='json-styling'>
                {JSON.stringify(selectedMovie, null, 2)}
            </pre>
        </div>
    );
}

export default OpenMovie;