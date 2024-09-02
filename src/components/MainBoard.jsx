import PropTypes from "prop-types";
import LoadingScreen from "./LoadingScreen";
import { useState } from "react";
import '/src/css/MainBoard.css';

function MainBoard({ joke, loading, fetchNewJoke }) {
  const [animationClass, setAnimationClass] = useState('');

  const handleHorizontalSpin = () => {
    setAnimationClass('spin-horizontal');
  };

  return (
    <>
      <div className="body">
        <p>-----</p>
        <div className={`MainBoard ${loading ? "loading" : ""}`}>
          {loading || joke.length === 0 ? ( // Keeps loading screen showing if no joke was loaded (from API call error or no data found)
            <LoadingScreen />
          ) : (
            <div className='factBox'>
              <div className='chuckHeadBox'>
              <img
                src="/pixelchuck.png"
                alt="Pixel Chuck Norris"
                id='pixelchuck' />
                </div>
                <div className='jokeBox'>
              <p className='joke'>{joke}</p>
            </div>
            </div>
          )}
          <p>------</p>
          <button onClick={fetchNewJoke}>Roundhouse another fact</button>
        </div>
      </div>
    </>
  );
}

MainBoard.propTypes = {
  joke: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchNewJoke: PropTypes.func.isRequired,
};

export default MainBoard;
