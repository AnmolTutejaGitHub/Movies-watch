import { useState, useEffect } from 'react';
import './OpenSeries.css';

function OpenSeries({ series, SetOpenSeries }) {
    const [season, setSeason] = useState(1);
    const [episode, setEpisode] = useState(1);
    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    const [seasons, setSeasons] = useState([]);
    const [seriesDetails, setSeriesDetails] = useState(null);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if (!series?.id) return;
        fetchSeriesDetails();
    }, [series]);

    useEffect(() => {
        console.log(seriesDetails);
    }, []);

    async function fetchSeriesDetails() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/tv/${series.id}?api_key=${API_KEY}&language=en-US`);
            const data = await response.json();
            console.log(data);
            setSeasons(data.seasons || []);
            setSeriesDetails(data);
        } catch (error) {
            console.error(error);
        }
    }

    // if (!series?.id || !seriesDetails) return <div>Select a series...</div>;


    const selectedSeason = seasons.find((s) => s.season_number === season);
    const episodeCount = selectedSeason?.episode_count || 1;

    const handleSeasonChange = (e) => {
        const newSeason = parseInt(e.target.value, 10);
        setSeason(newSeason);
        setEpisode(1);
    };

    return (
        <div className='container'>
            <div>
                {/* <div onClick={() => SetOpenSeries(false)}>X</div> */}
                {/* <img src={`https://image.tmdb.org/t/p/w500${seriesDetails.backdrop_path}`} alt={series.name} width={1000} /> */}
                <div className="header-movie" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${seriesDetails?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '500px',
                }}>
                </div>
                <div>
                    <h2>{series?.name}</h2>
                    <p>First Air Date: {seriesDetails?.first_air_date}</p>
                    <p>Overview: {seriesDetails?.overview}</p>
                    <p>Seasons: {seasons?.length}</p>
                    <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }} className='json-styling'>
                        {JSON.stringify(series, null, 2)}
                    </pre>
                    {!expand && <div onClick={() => setExpand(!expand)}>Expand Details</div>}
                    {expand && <div onClick={() => setExpand(!expand)}>Show Less</div>}
                    {expand && <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }} className='json-styling'>
                        {JSON.stringify(seriesDetails, null, 2)}
                    </pre>
                    }

                </div>
            </div>

            <div className='flex-selector'>
                <label>Select Season: </label>
                <select value={season} onChange={handleSeasonChange}>
                    {seasons.map((s) => (
                        <option key={s?.season_number} value={s?.season_number}>
                            Season {s?.season_number}
                        </option>
                    ))}
                </select>
                <br />
                <div className='gap'></div>
                <label>Select Episode: </label>
                <select value={episode} onChange={(e) => setEpisode(parseInt(e.target.value, 10))}>
                    {Array.from({ length: episodeCount }, (_, i) => i + 1).map((ep) => (
                        <option key={ep} value={ep}>
                            Episode {ep}
                        </option>
                    ))}
                </select>
            </div>

            <div className='iframe-series'>
                <iframe
                    className="movie-frame"
                    src={`https://vidsrc.to/embed/tv/${series.id}/${season}/${episode}`}
                    style={{ width: "100%", aspectRatio: "16/9" }}
                    referrerPolicy="origin"
                    allowFullScreen
                    title={series.name}
                />
            </div>
        </div>
    );
}

export default OpenSeries;