import PropTypes from "prop-types";
import LoadingScreen from "./LoadingScreen";
import '/src/css/MainBoard.css';

function MainBoard({ fact, loading, fetchNewFact }) {

  return (
    <>
      <div className="body">
        <div className={`MainBoard ${loading ? "loading" : ""}`}>
          {loading || fact.length === 0 ? ( // Keeps loading screen showing if no fact was loaded (from API call error or no data found)
            <LoadingScreen />
          ) : (
            <div className='outerFactBox'>
              <div className='chuckHeadBox'>
              <img
                src="/pixelchuck.png"
                alt="Pixel Chuck Norris"
                id='pixelchuck' />
                </div>
                <div className='factBox'>
              <p className='fact'>{fact}</p>
            </div>
            </div>
          )}
          <button onClick={fetchNewFact}>Roundhouse another fact</button>
        </div>
      </div>
    </>
  );
}

MainBoard.propTypes = {
  fact: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  fetchNewFact: PropTypes.func.isRequired,
};

export default MainBoard;
