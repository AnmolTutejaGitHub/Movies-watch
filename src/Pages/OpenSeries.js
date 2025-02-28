import { useState, useEffect } from 'react';
import './OpenSeries.css';

function OpenSeries({ series }) {
    const [season, setSeason] = useState(1);
    const [episode, setEpisode] = useState(1);
    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    const [seasons, setSeasons] = useState([]);
    const [seriesDetails, setSeriesDetails] = useState(null);

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

    if (!series?.id || !seriesDetails) return <div>Select a series...</div>;


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
                <img src={`https://image.tmdb.org/t/p/w500${seriesDetails.poster_path}`} alt={series.name} width={250} />
                <div>
                    <h2>{series.name}</h2>
                    <p>First Air Date: {seriesDetails.first_air_date}</p>
                    <p>Overview: {seriesDetails.overview}</p>
                    <p>Seasons: {seasons.length}</p>
                </div>
            </div>

            <div>
                <label>Select Season: </label>
                <select value={season} onChange={handleSeasonChange}>
                    {seasons.map((s) => (
                        <option key={s.season_number} value={s.season_number}>
                            Season {s.season_number}
                        </option>
                    ))}
                </select>

                <label>Select Episode: </label>
                <select value={episode} onChange={(e) => setEpisode(parseInt(e.target.value, 10))}>
                    {Array.from({ length: episodeCount }, (_, i) => i + 1).map((ep) => (
                        <option key={ep} value={ep}>
                            Episode {ep}
                        </option>
                    ))}
                </select>
            </div>

            <div>
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