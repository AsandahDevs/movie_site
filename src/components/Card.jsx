import "animate.css";

const Card = (props) => {
  return (
    <>
      <figure
        style={{ width: "300px" }}
        className="animate__animated animate__zoomIn"
      >
        <img src={props.imgSrc} alt={props.alt} style={props.imgStyle} />
        <figcaption>
          <h1 style={{ fontSize: "medium", fontWeight: "bold", color: "pink" }}>
            Release date: {props.releaseYear}
          </h1>
          <h2
            style={{
              fontSize: "large",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {props.title}
          </h2>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
