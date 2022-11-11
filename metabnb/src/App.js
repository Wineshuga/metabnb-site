import './App.css';
import Home from "./Pages/Home"
import Place from './Pages/Place';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path={Home}>Home</Route>
        <Route path={Place}>Place to stay</Route>
      </Routes>
    </>
  );
}

export default App;
