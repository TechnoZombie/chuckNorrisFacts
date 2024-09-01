import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchJoke } from "./components/JokeService.jsx";

// COMPONENTS
import Header from "./components/Header.jsx";
import MainBoard from "./components/MainBoard.jsx";
import Footer from "./components/Footer.jsx";

// CSS
import './css/App.css';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const loadJoke = async () => {
    setLoading(true);
    setJoke(''); // Reset joke to ensure previous joke isn't shown during loading
    try {
      const initialJoke = await fetchJoke();
      setJoke(initialJoke);
    } catch (error) {
      // TODO: Call an error component if the loading fails
      console.error("Error fetching joke:", error);
    } finally {
      // TODO: Create error component
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <>
      <Header />
      <Routes basename="/chuckNorrisFacts">
        <Route path="/" element={<MainBoard joke={joke} loading={loading} fetchNewJoke={loadJoke} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
