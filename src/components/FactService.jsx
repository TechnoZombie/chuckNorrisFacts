const API_URL_RANDOM = "https://api.chucknorris.io/jokes/random";

// Fetch data function
export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Fetch fact function
export const fetchFact = async () => {
  try {
    const initialFact = await fetchData(API_URL_RANDOM);
    return initialFact.value;
  } catch (error) {
    console.error("Error fetching fact:", error);
    throw error; // Re-throw the error if needed
  }
};
