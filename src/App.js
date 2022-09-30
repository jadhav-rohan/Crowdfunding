import "./App.css";
import Login from "./Components/Login/Login";
import Nav from "./Components/Navbar/Nav";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./Components/Project/Project";
import Aboutus from "./Components/AboutUs/Aboutus";
import Card from "./Components/Card/Card";
import CradList from "./Components/Card/CradList";
import { details } from "./Components/Card/details";
import Home from "./Components/Home";
import Working from "./Components/AboutUs/Working";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/addproject" element={<Project />} />
          <Route path="/pastcamp" element={<CradList details={details} />} />
          <Route path="/working" element={<Working />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
