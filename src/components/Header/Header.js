import React from 'react';
import './Header.css'
import Typical from 'react-typical'
import ashraful from '../../img/ashraful.jpg'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiFacebook } from 'react-icons/si';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Header = () => {
    return (
        <section className="bg-header" id="header">
            <div className="container pt-5">
                <div className="row mt-5">
                    <div className="col-md-8 px-3 mb-3 mb-md-0 px-md-0 d-flex align-items-center">
                        <div className=" fs-5 me-5 ">
                            <h6 className="text-common">Hello!</h6>
                            <h2 className="text-light text-name">
                                <span className='text-capitalize'>I Am </span>
                                <Typical className="text-white d-inline"
                                    steps={['Ashraful Mijan', 2000, 'Front-End Developer', 2000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h2>
                            <p style={{color: '#e6f1ff'}}>
                                I am a hard working individual web developer with deep knowledge and proficiency in front-end technology as well as the ability to communicate effectively in a team  setting, and possessing a strong willingness to learn about modern web technologies.
                            </p>
                            <FaGithub className="icon text-white" />
                            <FaLinkedinIn className="icon text-white" />
                            <SiFacebook className="icon text-white" />
                            <AiFillTwitterCircle className="icon text-white" />
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-0 pb-5 px-3 px-md-0 pb-md-0">
                        <img src={ashraful} className="w-100 larger-border text-center rounded-circle" alt="ashrafulMijan" />
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Header;