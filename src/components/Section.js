const Section = (props) => {
  return (
    <div className="white-bg">
      <div className="top-section container">
        <div className="description">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
        </div>

        <img className="top-section-img" src={props.image} alt="repas" />
      </div>
    </div>
  );
};

export default Section;
