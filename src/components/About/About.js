import React from 'react';
import './About.css';
import img from '../../img/ashraful.jpg'

const About = () => {
    return (
        <section className="about py-5" id="about">
            <div className="container my-5">
                <h3 className="text-center my-5 text-common">Profile</h3>
                <hr className="bg-white" />
                <div className="row pt-5">
                    <div className="col-md-4 px-3 px-md-0">
                        <h2 className="text-white">About Me</h2>
                        <p className="text-white text-justify">
                            Hi! I am Aryan Twanju, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since 2007. I enjoy creating beautifully designed, intuitive and functional websites.

                            For over past 8 years, I have worked for some of the best digital agencies and wonderful clients to create some award winning works. And, I can make this happen for your business as well.
                        </p>
                    </div>
                    <div className="col-md-4 px-3 text-center mt-3 mt-md-0">
                        <img src={img} className="w-75 border lg-border" alt=""/>
                    </div>
                    <div className="col-md-4 pt-5 pt-md-0">
                        <div className="px-3">
                            <h4 className="text-white pb-3">Basic Details</h4>
                            <p className="p-0 m-0 text-white fw-bold">Name:</p>
                            <p className="text-muted p-0 m-0">Ashraful Mijan</p>
                            <p className="p-0 m-0 text-white fw-bold">Age:</p>
                            <p className="text-muted p-0 m-0">23 years</p>
                            <p className="p-0 m-0 text-white fw-bold">Location:</p>
                            <p className="text-muted p-0 m-0">Moulvibazar, Sylhet, Bangladesh</p>
                        </div>
                        <a href="/" className="btn btn-primary bg-common border-0 my-4 ms-3">Download Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;