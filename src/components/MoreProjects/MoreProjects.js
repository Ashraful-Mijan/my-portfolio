import React from 'react';
import fixerBuddies from '../../img/fixerBuddies.PNG'
import exploreTeams from '../../img/exploreTeams.PNG'
import expressRiders from '../../img/expressRiders.PNG'
import CruiseQueen from '../../img/CruiseQueen.PNG'
import hungryMonster from '../../img/hungryMonster.PNG'
import carShop from '../../img/carShop.png'
import hotOne from '../../img/hotOne.png'
import comOne from '../../img/comOne.png'
import SingleAllProjects from '../SingleAllProjects/SingleAllProjects';


const projectsData = [
    {
        name: "Fixer Buddies",
        img: fixerBuddies,
        liveLink: 'https://fixer-buddies.web.app/',
        repo: 'https://github.com/Ashraful-Mijan/Fixer-Buddies',
        tech: 'React.js, node.js, mongoDB, firebase, stripe.js,  Bootstrap5',
        overview: 'Fixer Buddies is a single-page website where users can booking service to repair pars of laptop and desktop computer like RAM , HDD, Processor, Display Repair'
    },
    {
        name: "Red Onion",
        img: hotOne,
        liveLink: 'https://hot-onion-restaurant-app.web.app/',
        repo: 'https://github.com/Ashraful-Mijan/hot-onion-restaurant',
        tech: 'React.js, node.js, mongoDB, firebase, stripe.js,  Bootstrap5',
        overview: "red-onion a restaurant website. From our website, you can get healthy, delicious food at very affordable prices. We're working to give a new experience in your life. Feel free to visit our website and give us feedback on how we can give more impact on your life."
    },
    {
        name: "Computer Garage",
        img: comOne,
        liveLink: 'https://computer-repair-web.web.app/home',
        repo: 'https://github.com/Ashraful-Mijan/computer-garage',
        tech: 'React.js, node.js, mongoDB, firebase, stripe.js,  Bootstrap5',
        overview: "The Website is about your computer repair services . In this site you will find some cards about names of services , its prices and its descriptions . You will find a button in every card named as Repair . Click on the button then login with your Google account and repair your computer."
    },
    {
        name: "CarShop",
        img: carShop,
        liveLink: 'https://smart-carshop.web.app/',
        repo: 'https://github.com/Ashraful-Mijan/CarShop-client',
        tech: 'React.js, node.js, mongoDB, firebase, Bootstrap5',
        overview: 'CarShop is a single-page web application where users can buy car. This is a online CarShop platform to buy where user can choose and buy.'
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
        <section className="py-5" style={{ backgroundColor: '#152136' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2 className="mx-auto offset-md-2 pb-1 text-color">Latest Projects:</h2>
                        <hr className="text-white" />
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