import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://site--deliveroo--w4jk259snrnr.code.run/");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();},
    []);

  return isLoading ? (
    <p>Loading... </p> 
    ) : (
    <div className="App">
      <Header/>
      <Section name={data.restaurant.name} description={data.restaurant.description} image={data.restaurant.picture}/>
    </div>
  );
}

export default App;
