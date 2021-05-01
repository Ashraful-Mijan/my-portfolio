import React from 'react';
import './Contact.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Contact = () => {
    return (
        <section className="contact py-5 bg-skills " id='contact'>
            <div className="container">
                <h3 className="text-center my-5 text-common">GET IN TOUCH</h3>
                <hr className="bg-white" />
                <div className=" text-center">
                    <h3 className='text-light my-5'>Interested in doing a project together?</h3>
                    <button className="btn btn-outline-info btn-lg px-5 fs-5">Contact Me <HiOutlineArrowNarrowRight className="ms-3" /></button>
                </div>
            </div>
        </section>
    );
};

export default Contact;