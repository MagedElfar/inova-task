import './App.css';
import MapWrapper from './components/map-wrapper/MapWrapper';
import NavBar from './components/nav/NavBar';
import Gym from "./components/gym-data/Gym"
import {Route, Routes , useLocation} from "react-router-dom";



function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      <Routes >
          <Route path = "/" element = {<MapWrapper />} />
          <Route path = "/gyms/:id/info" element = {<Gym />} />

        </Routes>
    </div>
  );
}

export default App;