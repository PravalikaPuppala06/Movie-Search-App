/*import { useState } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [textColor, setTextColor] = useState("black"); // State for text color toggle

  const searchMovies = async () => {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const handleClick = () => {
    setTextColor(textColor === "black" ? "white" : "black");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Movie Search</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={() => {
            searchMovies();
            handleClick();
          }}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "teal",
            color: textColor, // Dynamically change text color
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              background: "#f9f9f9",
              width: "250px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2 style={{ fontSize: "18px", margin: "10px 0 5px" }}>
              {movie.Title}
            </h2>
            <p style={{ fontSize: "14px", color: "#555" }}>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;*/



import { useState } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchTextColor, setSearchTextColor] = useState("black"); // Search button text color
  const [clearTextColor, setClearTextColor] = useState("black"); // Clear button text color

  const searchMovies = async () => {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const handleSearchClick = () => {
    setSearchTextColor(searchTextColor === "black" ? "white" : "black");
  };

  const handleClearClick = () => {
    setQuery("");
    setMovies([]);
    setClearTextColor(clearTextColor === "black" ? "white" : "black"); // Only change Clear button text color
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Movie Search</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          style={{
            padding: "10px",
            width: "300px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={() => {
            searchMovies();
            handleSearchClick();
          }}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "teal",
            color: searchTextColor, // Independent color change for Search button
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>

        <button
          onClick={handleClearClick}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "teal",
            color: clearTextColor, // Independent color change for Clear button
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              textAlign: "center",
              background: "#f9f9f9",
              width: "250px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <h2 style={{ fontSize: "18px", margin: "10px 0 5px" }}>
              {movie.Title}
            </h2>
            <p style={{ fontSize: "14px", color: "#555" }}>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;

