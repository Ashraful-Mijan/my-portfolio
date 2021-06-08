import React from 'react';
import './Projects.css'
import fixerBuddies from '../../img/fixerBuddies.PNG'
import expressRiders from '../../img/expressRiders.PNG'
import exploreTeams from '../../img/exploreTeams.PNG'
import aircnc from '../../img/aircnc1.png'
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
        name: "Express Riders",
        img: expressRiders,
        liveLink: 'https://express-riders.web.app/',
        github: 'https://github.com/Ashraful-Mijan/Express-Riders'
    },
    // {
    //     name: "Aircnc",
    //     img: aircnc,
    //     liveLink: 'https://romantic-carson-9067a4.netlify.app/',
    //     github: 'https://github.com/Ashraful-Mijan/Explore-Teams'
    // }
    {
        name: "Explore Teams",
        img: exploreTeams,
        liveLink: 'https://romantic-carson-9067a4.netlify.app/',
        github: 'https://github.com/Ashraful-Mijan/Explore-Teams'
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