import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-lightBlue navbar-border">
            <div className="container">
                <Link className="navbar-brand fw-bold text-white brand-font" to='/'>Ashraful Mijan</Link>
                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        <Link to="/" className="nav-link text-white active ">Home</Link>
                        <Link to="/moreProjects" className="nav-link text-white " >Projects</Link>
                        <Link to="/" className="nav-link text-white">Blog</Link>
                        <a className="btn btn-primary bg-common border-0" href="https://docs.google.com/document/d/149MZ77v5orRqVJvfe1SDzF6ku_qkLvMR8mBOPWq4Z-A/edit?usp=sharing" rel="noreferrer" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;