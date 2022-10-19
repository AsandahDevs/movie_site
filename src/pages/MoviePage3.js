import { useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useImageFiles from "../hooks/useImageFiles";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

const MoviePage3 = () => {
  const [movieName, setMovieName] = useState("");

  /* using a custom hook to fetch movie data.Please note this hook returns an object with two properties,
  'info'(which is an array of data), and 'loadingStatus' (which is a boolean value).*/
  const { info, loadingStatus } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=73585424b9d1198974dbb05a54c359df&language=en-US&page=3"
  );

  // using a custom hook to fetch the base image URL for movie posters from  TMBD's image configuration files.
  const imageURL = useImageFiles();

  const captureMovieTitle = (e) => {
    setMovieName(e.target.value);
  };

  const filteredMovies = info.filter((movie) => {
    return movie.title.toLowerCase().includes(movieName.toLowerCase());
  });

  return (
    <>
      <h1>Most popular movies</h1>
      <Form.Control
        type="search"
        placeholder="search movie.."
        value={movieName}
        style={{ width: "300px", display: "block", margin: "auto" }}
        onChange={captureMovieTitle}
      />
      <br />
      <div className="grid-layout">
        {loadingStatus ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : filteredMovies.length === 0 ? (
          <p style={{ color: "white" }}>no matches found</p>
        ) : (
          filteredMovies.map((movie) => {
            return (
              <Card
                key={movie.id}
                /*Appending poster path of each image with its base URL from the configuration files.
            This is done to create a fully working image file path.*/
                imgSrc={imageURL.concat("w500", movie.poster_path)}
                alt={movie.title}
                imgStyle={{
                  width: "100%",
                  height: "auto",
                }}
                title={movie.title}
              />
            );
          })
        )}
      </div>
      <br />
      <nav aria-label="Page navigation ">
        <ul
          className="pagination"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <li className="page-item">
            <a className="page-link" href="/movies">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/movies/page2">
              2
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link " href="/movies/page3">
              3
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MoviePage3;