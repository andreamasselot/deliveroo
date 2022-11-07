import Menu from "./Menu";

const Categories = (props) => {
  return (
    <div className="categories-container">
      <h1>{props.title}</h1>

      <div className="meals">
        {props.meals.map((elem, index) => {
          return (
            <Menu
              title={elem.title}
              description={elem.description}
              price={elem.price}
              image={elem.picture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
