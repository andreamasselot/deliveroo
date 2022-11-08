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
  const [basket, setBasket] = useState([]);

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

                <div>
                  {basket.map((elem, index) => {
                    console.log(elem);
                    return (
                      <>
                        <div className="counter">
                          {elem.counter > 0 ? (
                            <button
                              onClick={() => {
                                const newTab = [...basket];
                                newTab[index].counter =
                                  newTab[index].counter - 1;
                                setBasket(newTab);
                              }}
                            >
                              -
                            </button>
                          ) : (
                            <button>-</button>
                          )}

                          <p>{elem.counter}</p>

                          <button
                            onClick={() => {
                              const newTab = [...basket];
                              console.log(newTab[index]);
                              newTab[index].counter = newTab[index].counter + 1;
                              setBasket(newTab);
                            }}
                          >
                            +
                          </button>
                        </div>
                        <div>{elem.title}</div>
                        <div>{elem.price}</div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="left-section">
              {data.categories.map((elem, index) => {
                return (
                  <Categories
                    key={index}
                    title={elem.name}
                    meals={elem.meals}
                    basket={basket}
                    setBasket={setBasket}
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
