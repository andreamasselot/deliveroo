import "./assets/fonts/stylesheet.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import Categories from "./components/Categories";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://site--deliveroo--w4jk259snrnr.code.run/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading... </p>
  ) : (
    <div className="App">
      <div>
        <Header />

        <Section
          name={data.restaurant.name}
          description={data.restaurant.description}
          image={data.restaurant.picture}
        />
        <div className="container">
          <div className="body">
            <div className="basket-container">
              <div className="basket">
                <h3>Valider mon panier</h3>
                <p>Votre panier est vide</p>
                {counter.map((elem) => {
                  return (
                    <>
                      <div className="counter">
                        <button>-</button>
                        <p></p>
                        <button>+</button>
                      </div>
                      <div>{data.categories.name}</div>
                      <div>{data.categories.price}</div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="left-section">
              {data.categories.map((elem, index) => {
                return (
                  <Categories
                    key={index}
                    title={elem.name}
                    meals={elem.meals}
                    counter={counter}
                    setCounter={setCounter}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
