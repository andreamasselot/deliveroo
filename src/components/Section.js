
const Section = (props) => {
return (
  <>
  <div>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <img className="top-section-img" src={props.image} alt="repas" />
  </div>
 
  </>
)
};

export default Section;