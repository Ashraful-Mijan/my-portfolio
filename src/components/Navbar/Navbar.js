import React from 'react';
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-lightBlue navbar-border">
            <div className="container">
                <Link className="navbar-brand fw-bold text-white brand-font" to='/'>Ashraful Mijan</Link>
                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        <Link to="/" className="nav-link text-white active ">Home</Link>
                        <Link to="/moreProjects" className="nav-link text-white " >Projects</Link>
                        <Link smooth to="/#about" className="nav-link text-white " >About</Link>
                        <Link to="/" className="nav-link text-white">Blog</Link>
                        <Link smooth to="/contactMe" className="nav-link text-white">Contact</Link>
                        <a className="btn primary-btn" href="https://drive.google.com/file/d/1XTYPi2S9tTo2DV1NyKUSvOQcefWRs5EQ/view?usp=sharing" rel="noreferrer" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;