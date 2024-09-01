const API_URL_RANDOM = "https://api.chucknorris.io/jokes/random";

// Fetch data function
export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Fetch joke function
export const fetchJoke = async () => {
  try {
    const initialJoke = await fetchData(API_URL_RANDOM);
    return initialJoke.value;
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw error; // Re-throw the error if needed
  }
};
