const Card = (props) => {
  return (
    <>
      <figure style={{ width: "300px" }}>
        <img src={props.imgSrc} alt={props.alt} style={props.imgStyle} />
        <figcaption>
          <h1 style={{ fontSize: "large" }}>{props.title}</h1>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
