import React from 'react';
import fixerBuddies from '../../img/fixerBuddies.PNG'
import exploreTeams from '../../img/exploreTeams.PNG'
import expressRiders from '../../img/expressRiders.PNG'
import CruiseQueen from '../../img/CruiseQueen.PNG'
import hungryMonster from '../../img/hungryMonster.PNG'
import SingleAllProjects from '../SingleAllProjects/SingleAllProjects';


const projectsData = [
    {
        name: "Fixer Buddies",
        img: fixerBuddies,
        liveLink: 'https://fixer-buddies.web.app/',
        repo: 'https://github.com/Ashraful-Mijan/Fixer-Buddies',
        tech: 'React.js, node.js, mongoDB, firebase, stripe.js,  Bootstrap5'
    },
    {
        name: "Explore Teams",
        img: exploreTeams,
        liveLink: 'https://romantic-carson-9067a4.netlify.app/',
        repo: 'https://github.com/Ashraful-Mijan/Explore-Teams',
        tech: 'React.js, Bootstrap5'
    },
    {
        name: "Express Riders",
        img: expressRiders,
        liveLink: 'https://express-riders.web.app/',
        repo: 'https://github.com/Ashraful-Mijan/Express-Riders',
        tech: 'React.js, firebase, Bootstrap5'
    },
    {
        name: "Cruise Queen",
        img: CruiseQueen,
        liveLink: 'https://ashraful-mijan.github.io/cruise-queen/',
        repo: 'https://github.com/Ashraful-Mijan/cruise-queen'
    },
    {
        name: "hungry Monster",
        img: hungryMonster,
        liveLink: 'https://ashraful-mijan.github.io/hungry-monster/',
        repo: 'https://github.com/Ashraful-Mijan/hungry-monster'
    }
]

const MoreProjects = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="mx-auto offset-md-2 pb-5 text-color">Latest Projects:</h2>
                        <hr/>
                    </div>
                    {
                        projectsData.map(data => <SingleAllProjects key={data.name} data={data} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MoreProjects;