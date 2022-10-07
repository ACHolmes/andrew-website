import './App.css';
import {
  Switch,
  Route,
  useParams
} from "react-router-dom";

import LandingPage from './containers/LandingPage';

function App() {
  return (
    <>
      <LandingPage />
      <div> refactor! </div> 
    </>
  )
}

export default App;
