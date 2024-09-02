# Chuck Norris: Facts.

Welcome to the Chuck Norris: Facts. app! This React application fetches and displays random Chuck Norris facts from the ChuckNorris.io API. The app features a fun and interactive UI with animations and easy navigation.

## Features

- **Random Facts**: Fetch and display random Chuck Norris facts.
- **Loading State**: Shows a loading screen while fetching data.
- **Animated Header**: Includes an animated header with Chuck Norris imagery.
- **Responsive Footer**: Displays information and links to the project's GitHub repository.

## Components

### `App`

The main component of the application that sets up routing and manages the state for the fetched fact and loading status. It also includes the `Header`, `MainBoard`, and `Footer` components.

### `Header`

The `Header` component features a shaking animation for the title and displays an image of Lego Chuck Norris. It uses the `useRef` and `useEffect` hooks to handle animation effects.

### `MainBoard`

The `MainBoard` component is responsible for displaying the Chuck Norris fact and the loading state. It conditionally renders a `LoadingScreen` component or the fetched fact, and includes a button to fetch a new fact.

### `Footer`

The `Footer` component provides information about the app, including its version and a link to the ChuckNorris.io API. It also includes a GitHub link to the project's repository.

## Services

### `fetchData`

A utility function to fetch data from a given URL. It handles the HTTP request and returns the response as JSON.

### `fetchFact`

A function to fetch a random Chuck Norris fact from the ChuckNorris.io API. It utilizes the `fetchData` function and handles any errors that may occur during the fetch operation.

## Getting Started

To get started with the Chuck Norris Facts app, follow these instructions:

1. Clone the Repository
   `git clone https://github.com/TechnoZombie/chuckNorrisFacts.git`
2. Navigate to the Project Directory
    `cd chuckNorrisFacts`
3. Install Dependencies
    `npm install`
4. Start the Development Server
    `npm run dev`


## Folder Structure

    src/components: Contains React components such as Header, MainBoard, Footer, and LoadingScreen.
    src/css: Contains CSS files for styling the components.
    src/FactService.jsx: Contains service functions for fetching data from the API.
    src/App.js: Main application component that sets up routing and manages state.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request on the GitHub repository.
License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

ChuckNorris.io - API for Chuck Norris facts.
React - JavaScript library for building user interfaces.
