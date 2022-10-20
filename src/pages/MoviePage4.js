import { useState } from "react";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import useImageFiles from "../hooks/useImageFiles";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

const MoviePage4 = () => {
  const [movieName, setMovieName] = useState("");

  /* using a custom hook to fetch movie data.Please note this hook returns an object with two properties,
  'info'(which is an array of data), and 'loadingStatus' (which is a boolean value).*/
  const { info, loadingStatus, errorMessage, errorState } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=73585424b9d1198974dbb05a54c359df&language=en-US&page=4"
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
                releaseYear={movie.release_date}
                title={movie.title}
              />
            );
          })
        )}
      </div>
      <br />
      {errorState ? (
        <div
          className="card text-white bg-danger mb-3"
          style={{ width: "500px", display: "block", margin: "auto" }}
        >
          <div className="card-body">
            <h1 style={{ fontSize: "medium" }}>ERR_INTERNET_DISCONNECTED !</h1>
            <p className="card-text">
              {errorMessage} required data from our servers due to a possible
              poor internet connection.Reconnect to your network provider and
              try again.
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
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
          <li className="page-item ">
            <a className="page-link " href="/movies/page3">
              3
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link " href="/movies/page4">
              4
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MoviePage4;
