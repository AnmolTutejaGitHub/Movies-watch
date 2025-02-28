import OpenSeries from './OpenSeries';
import './SeriesSearch.css';
import { useState } from 'react';
function MoviesSearch() {
    const [series, setSeries] = useState('');
    const [results, setResults] = useState([]);
    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    const [openSeries, setOpenSeries] = useState(false);
    const [currentSeries, setCurrentSeries] = useState({});



    async function searchSeries(e) {
        const query = e.target.value;
        setSeries(query);
        console.log(query);
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=en-US`);
            const data = await response.json();
            console.log(data);
            setResults(data?.results || []);
        } catch (err) {
            console.log(err);
        }
    }

    function handleSeriesClick(series) {
        setOpenSeries(true);
        setCurrentSeries(series);
    }


    const renderSeries = results.map((show) => {
        return (
            <div className='show' onClick={() => handleSeriesClick(show)} key={show.id}>
                <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.name} width={200} />
                <div>{show.name}</div>
            </div>
        );
    });
    return <div>
        {!openSeries && <>
            <div className='flex-center'>
                <input className='series-search-bar' placeholder="search your favourite series..." onChange={(e) => searchSeries(e)}></input>
            </div>
            <div className='flex-series'>{renderSeries}</div>
        </>}
        {OpenSeries && <OpenSeries series={currentSeries} />}

    </div >
}
export default MoviesSearch;