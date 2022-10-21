const Footer = () => {
  return (
    <div style={{ color: "white" }}>
      <span>&copy; Asanda Majola </span> |{" "}
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        alt="TMDb logo"
        style={{
          width: "1.5rem",
          height: "auto",
        }}
      />
      <p style={{ color: "grey", fontSize: "small", fontWeight: "bold" }}>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
    </div>
  );
};

export default Footer;
