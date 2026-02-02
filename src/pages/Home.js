import Card from "../components/Card";
import useFetch from "../hooks/useFetch";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
  /* using a custom hook to fetch movie data.Please note this hook returns an object with two properties,
  'info'(which is an array of data), and 'loadingStatus' (which is a boolean value).*/
  const { info, loadingStatus } = useFetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=73585424b9d1198974dbb05a54c359df&language=en-US"
  );

  return (
    <>
      <h1>Trending movies</h1>

      <div className="grid-layout">
        {loadingStatus ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : info.length === 0 ? (
          <p>no matches found</p>
        ) : (
          info.map((movie) => {
            return (
              <Card
                key={movie.id}
                /*Appending poster path of each image with its base URL from the configuration files.
            This is done to create a fully working image file path.*/
                imgSrc={"https://image.tmdb.org/t/p/".concat(
                  "w500",
                  movie.poster_path
                )}
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
    </>
  );
};
export default Home;
