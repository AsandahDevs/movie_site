import { useState, useEffect } from "react";
import Card from "../components/Card";

const Movies = () => {
  const [movieData, setMovieData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  //fetching movie data
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=73585424b9d1198974dbb05a54c359df&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setMovieData(data.results))
      .catch((error) => console.log(error.message));
  }, []);

  //fetching configuration files containing base image URLs
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/configuration?api_key=73585424b9d1198974dbb05a54c359df"
    )
      .then((response) => response.json())
      .then((data) => setImageUrl(data.images.secure_base_url))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <h1>Most popular movies</h1>
      <div className="grid-layout">
        {movieData.map((movie) => {
          return (
            <Card
              key={movie.id}
              /*Appending poster path of each image with its base URL from the configuration files.
            This is done to create a fully working image file path.*/
              imgSrc={imageUrl.concat("w500", movie.poster_path)}
              alt="movie poster"
              imgStyle={{
                width: "100%",
                height: "auto",
              }}
              title={movie.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Movies;
