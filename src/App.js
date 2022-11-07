import "./assets/fonts/stylesheet.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import Categories from "./components/Categories";
import Basket from "./components/Basket";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
            <div className="basket">
              <Basket />
            </div>
            <div>
              {data.categories.map((elem, index) => {
                return (
                  <Categories
                    key={index}
                    title={elem.name}
                    meals={elem.meals}
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
