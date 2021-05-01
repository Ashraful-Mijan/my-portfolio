import React from 'react';
import './Projects.css'
import fixerBuddies from '../../img/fixerBuddies.PNG'
import expressRiders from '../../img/expressRiders.PNG'
import exploreTeams from '../../img/exploreTeams.PNG'
import Project from '../Project/Project';
import { Link } from 'react-router-dom';

const projects = [
    {
        name: "Fixer Buddies",
        img: fixerBuddies,
        liveLink: '',
        github: ''
    },
    {
        name: "Express Riders",
        img: expressRiders,
        liveLink: '',
        github: ''
    },
    {
        name: "Explore Teams",
        img: exploreTeams,
        liveLink: '',
        github: ''
    },
]

const Projects = () => {
    return (
        <section className="projects py-5" id="projects">
            <div className="container">
            <h3 className="text-center my-5 text-common">Projects</h3>
                <hr className="bg-white" />
                <div className="row py-5">
                    {
                        projects.map(project => <Project key={project.name} project={project} />)
                    }
                </div>
                <Link to="/moreProjects" className="btn btn-primary btn-sm text-center d-block mx-auto sm-button">See More</Link>
            </div>
        </section>
    );
};

export default Projects;