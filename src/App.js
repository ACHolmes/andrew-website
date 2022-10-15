// For routing later
// import {
//   Switch,
//   Route,
//   useParams
// } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import LandingPage from './containers/LandingPage';

function App() {
  return (
    <>
      <ThemeProvider theme = {theme}>
        <LandingPage />
        <div> refactor! </div> 
      </ThemeProvider>
      
    </>
  )
}

export default App;
