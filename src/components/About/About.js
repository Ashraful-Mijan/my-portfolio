import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about py-5" id="about">
            <div className="container my-5">
                <h3 className="text-center my-5 text-common">Profile</h3>
                <hr className="bg-white" />
                <div className="row pt-5">
                    <div className="col-md-6 px-3 px-md-0">
                        <h4 className="text-white">About Me</h4>
                        <p className="text-white text-justify">
                            Hi! I am Ashraful Mijan, a web developer focused on crafting great web experiences.  Coding  has been my passion since the day I started working with computers .I have a deep interest in JavaScript. I enjoy creating beautifully designed, intuitive and functional websites. I have created and designed some responsive websites with modern and useful features .
                        </p>
                        <div>
                            <p className="text-white"><span className="fw-bold text-uppercase">phone:</span> <span className="ps-3">01752538207</span></p>
                            <p className="text-white"><span className="fw-bold text-uppercase">email:</span> <span className="ps-3">ashrafulmijan5@gmail.com</span></p>
                            <p className="text-white"><span className="fw-bold text-uppercase">address:</span> <span className="ps-3">Sylhet, Bangladesh</span></p>
                        </div>
                        <a rel="noreferrer" href="https://drive.google.com/file/d/1XTYPi2S9tTo2DV1NyKUSvOQcefWRs5EQ/view?usp=sharing" target="_blank" className="btn primary-btn my-4">Download Resume</a>
                    </div>
                    <div className="col-md-6 pt-5 pt-md-0">
                        {/* accordion */}
                        <div className="accordion" id="accordionExample">
                            <h4 className="text-white">Technical Skills</h4>
                            <div className="accordion-item ">
                                <h2 className="accordion-header bg-dark" id="headingOne">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Expertise
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white " style={{ backgroundColor: '#152136' }}>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Javascript</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>ES6</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>React.js</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>REST API</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Bootstrap5</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>HTML5</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>CSS3</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Comfortable
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{ backgroundColor: '#152136' }}>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Node.js</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>ES6</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Express.js</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>MongoDB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Familiar
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{ backgroundColor: '#152136' }}>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>TypeScript</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>jQuery</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>AJAX</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Material UI</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Tailwind</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Material UI</span>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Tools
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-white" style={{ backgroundColor: '#152136' }}>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Git</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>NPM</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Firebase</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Netlify</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Heroku</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>Chrome Dev tool</span>
                                        <span className=' px-1 border py-1 m-1 d-inline-block'>VS Code</span>
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
