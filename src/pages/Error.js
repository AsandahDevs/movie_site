import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h1>404</h1>
      <h2
        style={{
          color: "whitesmoke",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Page not found !
      </h2>
      <Button style={{ display: "block", margin: "auto" }} variant="secondary">
        <Link
          to="/movie_site/"
          style={{ textDecoration: "none", color: "white" }}
        >
          Go back home
        </Link>
      </Button>
    </>
  );
};

export default Error;
