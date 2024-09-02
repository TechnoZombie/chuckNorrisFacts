import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchFact } from "./components/FactService.jsx";

// COMPONENTS
import Header from "./components/Header.jsx";
import MainBoard from "./components/MainBoard.jsx";
import Footer from "./components/Footer.jsx";

// CSS
import './css/App.css';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const loadFact = async () => {
    setLoading(true);
    setFact(''); // Reset fact to ensure previous fact isn't shown during loading
    try {
      const initialFact = await fetchFact();
      setFact(initialFact);
    } catch (error) {
      // TODO: Call an error component if the loading fails
      console.error("Error fetching fact:", error);
    } finally {
      // TODO: Create error component
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <>
      <Header />
      <Routes basename="/chuckNorrisFacts">
        <Route path="/chuckNorrisFacts" element={<MainBoard fact={fact} loading={loading} fetchNewFact={loadFact} />} />
        <Route path="*" element={<MainBoard fact={fact} loading={loading} fetchNewFact={loadFact} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
