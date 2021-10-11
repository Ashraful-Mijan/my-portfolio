import React from 'react';
import './Projects.css'
import fixerBuddies from '../../img/fixerBuddies.PNG'
import expressRiders from '../../img/expressRiders.PNG'
import exploreTeams from '../../img/exploreTeams.PNG'
import hotOne from '../../img/hotOne.png'
import comOne from '../../img/comOne.png'
// import aircnc from '../../img/aircnc1.png'
import Project from '../Project/Project';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        name: "Fixer Buddies",
        img: fixerBuddies,
        liveLink: 'https://fixer-buddies.web.app/',
        github: 'https://github.com/Ashraful-Mijan/Fixer-Buddies'
    },
    {
        name: "Red Onion",
        img: hotOne,
        liveLink: 'https://hot-onion-restaurant-app.web.app/',
        github: 'https://github.com/Ashraful-Mijan/hot-onion-restaurant'
    },
    // {
    //     name: "Aircnc",
    //     img: aircnc,
    //     liveLink: 'https://romantic-carson-9067a4.netlify.app/',
    //     github: 'https://github.com/Ashraful-Mijan/Explore-Teams'
    // }
    {
        name: "Computer Garage",
        img: comOne,
        liveLink: 'https://computer-repair-web.web.app/home',
        github: 'https://github.com/Ashraful-Mijan/computer-garage'
    },
]

const Projects = () => {
    return (
        <section className="projects py-5" id="projects">
            <div className="container">
                <h3 className="text-center my-5 text-common">Projects</h3>
                <hr className="bg-white" />
                <div className="row">
                    {
                        projectsData.map(project => <Project key={project.name} project={project} />)
                    }
                </div>
                <div className="text-center pt-5">
                    <Link to="/moreProjects" className="btn primary-btn text-center mx-auto">See More</Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;