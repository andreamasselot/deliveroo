const Menu = (props) => {
  return (
    <div
      className="menu-container"
      onClick={() => {
        const newTab = [...props.counter];
        newTab.push({ title: props.title, price: props.price });
        props.setCounter(newTab);
      }}
    >
      <div className="options">
        <h2 className="food-title">{props.title} </h2>
        <p className="food-caption">{props.description}</p>
        <p className="prices">{props.price} €</p>
      </div>
      {props.image && <img className="menu-img" src={props.image} alt="food" />}
    </div>
  );
};

export default Menu;
