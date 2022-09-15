import React from "react";
import "./NavBar.css";
import metadata from "../data/metadata.json";

const NavBar = () => {
    return (
        <div className="navbar">
           <i className="fas fa-play"></i>
            <div className="app-header">{metadata.appName}</div>
            <div className="nav-links">
                <a
                    href="https://www.github.com/jessej-samuel/spotipy"
                    target="_blank"
                    rel="noreferrer"
                >
                   
                </a>
            </div>
        </div>
    );
};

export default NavBar;
