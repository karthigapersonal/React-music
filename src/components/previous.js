import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Registerform from "./Registerform";
import Signin from "./Signin";
import Playlist from "./Playlist";

class App extends Component {
  render() {
    return (
         <Router>
                <Routes>
                  <Route exact path="/" element={<Header />} />
                  <Route exact path="/signup" element={<Registerform />} />
                  
                  <Route path="/login" element={<Signin/>} />
                  {/* <Route path="/logout" element={<Logout/>} /> */}
                  <Route path="/playlist" element={<Playlist/>} />
                </Routes>
          </Router>
    );
  }
}

export default App;
