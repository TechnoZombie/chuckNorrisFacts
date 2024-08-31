import PropTypes from "prop-types";
import LoadingScreen from "./LoadingScreen";

function MainBoard({ joke, loading }) {
  return (
    <>
    <div className="body">
      <p>-----</p>
      <p>this will be the body of the page</p>
      <div className={`MainBoard ${loading ? "loading" : ""}`}>
        {loading || joke.length === 0 ? ( //keeps loading screen showing if no joke was loaded (from  API call error or no data found)
          <LoadingScreen />
        ) : (
          <p className="joke">{joke}</p>
        )}{" "}
        <p>------</p>
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
