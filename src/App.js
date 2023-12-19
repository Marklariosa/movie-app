import { useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard.jsx";

const API_URL = "http://www.omdbapi.com?apikey=9aaed99e";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovies = async () => {
    const response = await fetch(`${API_URL}&s=${search}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(data);
  };

  return (
    <>
      <div className="App">
        <h1>LMovies</h1>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="button" value="Search" onClick={() => searchMovies()} />
      </div>
      <div className="movies">
        {movies.length === 0 ? (
          <>No Movies Found!</>
        ) : (
          movies.map((movie, index) => <MovieCard movie={movie} key={index} />)
        )}
      </div>
    </>
  );
}

export default App;