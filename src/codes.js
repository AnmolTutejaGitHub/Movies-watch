// //import axios from 'axios';  // Correct axios import

// // tmdb api : https://www.themoviedb.org/settings/api/regenerate_confirm
// // tmdb api : ba7953e31d9a9e4bbd5bc6729366b6a2

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function App() {
//     const [movies, setMovies] = useState([]);
//     const [selectedMovie, setSelectedMovie] = useState(null);

//     // Fetch popular movies from TMDB
//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
//                     params: {
//                         api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2', // Your TMDB API key
//                         language: 'en-US',
//                         page: 1
//                     }
//                 });
//                 console.log(response.data.results);
//                 setMovies(response.data.results); // Set the fetched movies
//             } catch (error) {
//                 console.error('Error fetching movies:', error);
//             }
//         };

//         fetchMovies();
//     }, []);

//     // Function to handle movie selection
//     const handleMovieClick = (movie) => {
//         setSelectedMovie(movie); // Set the clicked movie as selected
//     };

//     return (
//         <div>
//             <h1>Popular Movies</h1>
//             <ul>
//                 {movies.map((movie) => (
//                     <li key={movie.id} onClick={() => handleMovieClick(movie)}>
//                         {movie.title} ({movie.release_date})
//                     </li>
//                 ))}
//             </ul>

//             {selectedMovie && (
//                 <div>
//                     <h2>{selectedMovie.title}</h2>
//                     <div className="w-full aspect-video">
//                         {/* Embed the movie video using the TMDB id */}
//                         <iframe
//                             src={`https://vidsrc.xyz/embed/movie?tmdb=${selectedMovie.id}`}
//                             style={{ width: "100%", aspectRatio: "16/9" }}
//                             referrerPolicy="origin"
//                             allowFullScreen
//                             title={selectedMovie.title}
//                         ></iframe>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch popular movies from TMDB
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2', // Your TMDB API key
                        language: 'en-US',
                        page: 1
                    }
                });
                setMovies(response.data.results); // Set the fetched movies
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    // Function to handle movie selection
    const handleMovieClick = (movie) => {
        setSelectedMovie(movie); // Set the clicked movie as selected
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // Update search term
    };

    // Function to handle search
    const handleSearch = async () => {
        if (!searchTerm) return; // Don't search if the input is empty
        try {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'ba7953e31d9a9e4bbd5bc6729366b6a2',
                    query: searchTerm,
                    language: 'en-US'
                }
            });
            setMovies(response.data.results); // Update movies with search results
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div>
            <h1>Popular Movies</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id} onClick={() => handleMovieClick(movie)}>
                        {movie.title} ({movie.release_date})
                    </li>
                ))}
            </ul>

            {selectedMovie && (
                <div>
                    <h2>{selectedMovie.title}</h2>
                    <div className="w-full aspect-video">
                        {/* Embed the movie video using the TMDB id */}
                        <iframe
                            src={`https://vidsrc.xyz/embed/movie?tmdb=${selectedMovie.id}`}
                            style={{ width: "100%", aspectRatio: "16/9" }}
                            referrerPolicy="origin"
                            allowFullScreen
                            title={selectedMovie.title}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;