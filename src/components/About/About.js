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
                            Hi! I am Ashraful Mijan, a web developer focused on crafting great web experiences.  Coding  has been my passion since the day I started working with computers .I have a deep interest in JavaScript. I enjoy creating beautifully designed, intuitive and functional websites. I have created and designed some responsive websites with modern and useful features .
                        </p>
                        <a href="/" className="btn primary-btn my-4">Download Resume</a>
                    </div>
                    <div className="col-md-4 px-3 text-center mt-3 mt-md-0">
                        <img src={img} className="w-75 border lg-border" alt="" />
                    </div>
                    <div className="col-md-4 pt-5 pt-md-0">
                        {/* accordion */}
                        <div className="accordion" id="accordionExample">
                            <h2 className="text-color">Technical Skills: </h2>
                            <div className="accordion-item ">
                                <h2 className="accordion-header bg-dark" id="headingOne">
                                    <button className="accordion-button fw-bold text-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Expertise
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{backgroundColor: '#152136'}}>
                                        <strong className='d-block'>* Javascript</strong>
                                        <strong className='d-block'>* ES6</strong>
                                        <strong className='d-block'>* React.js</strong>
                                        <strong className='d-block'>* REST API</strong>
                                        <strong className='d-block'>* Bootstrap5</strong>
                                        <strong className='d-block'>* HTML5</strong>
                                        <strong className='d-block'>* CSS3</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Comfortable
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{backgroundColor: '#152136'}}>
                                        <strong className='d-block'>* Node.js</strong>
                                        <strong className='d-block'>* ES6</strong>
                                        <strong className='d-block'>* Express.js</strong>
                                        <strong className='d-block'>* MongoDB</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Familiar
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{backgroundColor: '#152136'}}>
                                        <strong className='d-block'>* TypeScript</strong>
                                        <strong className='d-block'>* jQuery</strong>
                                        <strong className='d-block'>* AJAX</strong>
                                        <strong className='d-block'>* Material UI</strong>
                                        <strong className='d-block'>* Tailwind</strong>
                                        <strong className='d-block'>* React Native</strong>
                                        <strong className='d-block'>* Python</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Tools
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{backgroundColor: '#152136'}}>
                                        <strong className='d-block'>* Git</strong>
                                        <strong className='d-block'>* NPM</strong>
                                        <strong className='d-block'>* VS Code</strong>
                                        <strong className='d-block'>* Chrome Dev tool</strong>
                                        <strong className='d-block'>* Firebase</strong>
                                        <strong className='d-block'>* Netlify</strong>
                                        <strong className='d-block'>* Heroku</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
