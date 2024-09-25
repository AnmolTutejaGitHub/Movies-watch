import { useState, useEffect } from 'react';
import SearchResultDiv from '../SearchBar/SearchResultDiv';
import './AllMovies.css';
import Margin from '../Margin/Margin';
import Footer from '../Footer/Footer';
import { Puff } from 'react-loader-spinner';

function AllMovies({ GetSelectedMovie }) {
    const [allMovies, setAllMovies] = useState([]);
    const [pages, setPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const API_KEY = 'ba7953e31d9a9e4bbd5bc6729366b6a2';
    async function fetchMovies() {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pages}`
        );
        const data = await response.json();
        setAllMovies([...allMovies, ...data.results]);
        setLoading(false);
    }

    useEffect(() => {
        fetchMovies();
    }, [pages]);

    function loadMore() {
        setPages(pages + 1);
    }

    const renderMovies = allMovies.filter(movie => movie.poster_path).map((movie) => {
        //console.log(movie);
        return (
            <SearchResultDiv
                key={movie.id}
                movie={movie}
                GetSelectedMovie={GetSelectedMovie}
            />
        );
    });

    return (
        <>
            {loading &&
                <div className="loader-container">
                    <Puff
                        visible={true}
                        height="80"
                        width="80"
                        color="grey"
                        ariaLabel="puff-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            }
            {!loading && <div>
                <Margin padding="50px" />
                <div className='allmoviesDiv'>{renderMovies}</div>
                <div onClick={loadMore} className='load-more'>Load More</div>
                <Margin padding="20px" />
                <Footer />
            </div>}
        </>
    );
}

export default AllMovies;