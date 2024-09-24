import { useState } from 'react';
import './PopularDiv.css';
import { MdHd } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { GrLike } from "react-icons/gr";
import { LiaAudioDescriptionSolid } from "react-icons/lia";


const imageBaseUrl = "https://image.tmdb.org/t/p/w200";

function PopularDiv({ movie, onClick }) {

    const [hover, setHover] = useState(false);
    const release_date_string = movie.release_date
    console.log(movie);
    return (
        <div className='popular-div'>
            <div onClick={() => onClick(movie)} className="popular-movie" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
                {/* {hover &&
                    <div className='hover-div'>
                        <p className='align-center bold'>{movie.title}</p>
                        <div className="pd-10px">{release_date_string.substring(0, 4)}</div>

                        <div class="popular-icons">
                            <MdHd className="HD" />
                            <GrLike className="like" />
                            <LiaAudioDescriptionSolid className='audio-description' />
                            <FaCirclePlay className='play' />
                        </div>
                    </div>
                } */}
            </div>
        </div>
    );
}

export default PopularDiv;