//REACT
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import Header from "./components/Header.jsx";
import MainBoard from "./components/MainBoard.jsx";
import Footer from "./components/Footer.jsx";

//CSS
import './css/App.css'

//IMAGES

const API_URL_RANDOM = "https://api.chucknorris.io/jokes/random";

const fetchData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchJoke = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const initialJoke = await fetchData(API_URL_RANDOM);
      setJoke(initialJoke.value);
    } catch (error) {
      // Handle the error here, e.g., display an error message
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched or if an error occurs
      // TODO: Create error component
    }
  };
  fetchJoke();
}, []);



  return (
    <>
    <Header />

    <Routes basename="/chuckNorrisFacts">
    <Route path="/"
      element={<MainBoard joke={joke} loading={loading} />} />    
    </Routes>
    
    <Footer />
    </>
  )
}

export default App
