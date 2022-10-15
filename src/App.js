// For routing later
// import {
//   Switch,
//   Route,
//   useParams
// } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter as Router } from 'react-router-dom'

import TempPage from './containers/TempPage';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme = {theme}>
          <TempPage />
        </ThemeProvider>
      </Router>
      
    </>
  )
}

export default App;
