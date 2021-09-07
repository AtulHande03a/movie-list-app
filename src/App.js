import "./styles.css";
import { useState } from "react";
import Footer from "./Footer";

const movieList = {
  Action: [
    {
      name: "Swashank Redemption",
      rating: "9.2/10"
    },
    { name: "  Inception ", rating: "9.0/10" },
    { name: "The Dark Knight", rating: "9.0/10" }
  ],
  Crime: [
    { name: "The Godfather  ", rating: "9.2/10" },
    {
      name: "Joker ",
      rating: "8.4/10"
    },
    { name: "Gangs of Wasseypur", rating: "8.2/10" }
  ],
  Sport: [
    { name: "Warrior ", rating: "8.1/10" },
    {
      name: "Rocky  ",
      rating: "8.1/10"
    },
    { name: " Southpaw ", rating: "7.2" }
  ],
  War: [
    { name: "Saving Private Ryan", rating: "8.7/10" },
    {
      name: "Uri: The Surgical Strike ",
      rating: "8.3/10"
    },
    {
      name: "Inglourious Basterds ",
      rating: "8.3/10"
    }
  ]
};

const list = Object.keys(movieList);

export default function App() {
  const [genres, setGenres] = useState("Action");

  function clickHandler(item) {
    return setGenres(item);
  }

  return (
    <div className="App">
      <main>
        <h1 className="title">🎬 Movies List</h1>
        <div className="genre-list">
          {list.map((item) => {
            return (
              <button
                className="genre-list-btn"
                onClick={() => clickHandler(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr></hr>
        <div className="movie-detail">
          <ul className="movie-detail-list">
            {movieList[genres].map((movie) => {
              return (
                <li className="movie-bullets" key={movie.name}>
                  <div className="movie-name">{movie.name}</div>
                  <div className="movie-rating">{movie.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
