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
          <h1 style={{ fontSize: "large" }}>{props.title}</h1>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
