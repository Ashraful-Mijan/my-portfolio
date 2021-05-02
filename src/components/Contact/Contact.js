import React from 'react';
import './Contact.css'
import EmailContact from '../EmailContact/EmailContact';

const Contact = () => {
    return (
        <section className="contact py-5 bg-skills " id='contact'>
            <div className="container">
                <h3 className="text-center my-5 text-common">GET IN TOUCH</h3>
                <hr className="bg-white" />
                <div className=" text-center">
                    <h3 className='text-light my-5'>Interested in doing a project together?</h3>
                    <EmailContact/>
                </div>
            </div>
        </section>
    );
};

export default Contact;