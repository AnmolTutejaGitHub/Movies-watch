```
    if you are in India or site is not showing any data use VPN
```

This is Movie Watch website made in React.
The search bar, popular movies, and trending movies sections are working seamlessly. Users can search for any movie using the search bar, view a list of popular and trending movies, and get detailed information about any selected movie.

	•	TMDB API fetches the movies’ data.
    •    vidsrc is used for video streaming
	•	Splide is used to provides smooth sliding effects for the movie cards.


To Run the React App : 
```
    npm start
```

using tmdb API to get data related to movies  : 
```
    https://www.themoviedb.org/
```

for video streaming using vidsrc (can give result based on tmdb id):
```
    https://vidsrc.xyz/embed/movie?tmdb=${movie.id}
```


Deployment : 
```
    https://movies-watch-rho.vercel.app/
```


To use signup/login you can only do it locally :
after running the server
```
    npm start
    npm start server
    json-server --watch db.json --port 3001
```