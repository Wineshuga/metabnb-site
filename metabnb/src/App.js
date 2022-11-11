import './App.css';
import Home from "./Pages/Home"
import Place from './Pages/Place';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/place-to-stay' element={<Place />} />
      </Routes>
    </>
  );
}

export default App;
