import PropTypes from "prop-types";
import LoadingScreen from "./LoadingScreen";
import { useState} from "react";
import '/src/css/MainBoard.css'

function MainBoard({ joke, loading }) {
  const [animationClass, setAnimationClass] = useState('');

  const handleHorizontalSpin = () => {
    setAnimationClass('spin-horizontal');
  };

// TODO: Set an animation to shake title once legochuck stops roundhousing
// TODO: Get a new fact on button click

  return (
    <>
      <div className="body">
        <p>-----</p>
        <div className={`MainBoard ${loading ? "loading" : ""}`}>
          {loading || joke.length === 0 ? ( //keeps loading screen showing if no joke was loaded (from  API call error or no data found)
            <LoadingScreen />
          ) : (
              <div className='factBox'>
              <img
                  src="/pixelchuck.png"
                  alt="Pixel Chuck Norris"
                  id='pixelchuck'/>
                <p className='joke'>{joke}</p>
                </div>
          )}{" "}

          <p>------</p>

          <button onClick={handleHorizontalSpin}>Roundhouse another fact</button>
        </div>
      </div>
    </>
  );
}

MainBoard.propTypes = {
  joke: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default MainBoard;
