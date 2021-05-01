import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
           <Header/>
           <About/>
           <Skills/>
           <Projects/>
           <Contact/> 
        </div>
    );
};

export default Home;