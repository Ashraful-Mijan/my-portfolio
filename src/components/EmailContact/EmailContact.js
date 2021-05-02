import React from 'react';
import emailjs from 'emailjs-com';
import './EmailContact.css'

const EmailContact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_zm2cqaj', 'template_ajpzg0p', e.target, 'user_VrZgHWABOtIeEosjseaON')
            .then((result) => {
                console.log(result.text);
                if (result) {
                    alert('Your mail is successfully sent')
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-start">
                    <h5 className='text-color'>Contact Me:</h5>
                    <form className="" onSubmit={sendEmail}>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-form" name="name" placeholder="Your Name*" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-form" name='subject' placeholder="Subject*" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-form" name='email' placeholder="Your Email*" />
                        </div>
                        <div className="mb-3">
                            <textarea name="message" cols="15" rows="5" className="form-control bg-form" placeholder="write message*"></textarea>
                        </div>
                        <button type="submit" className="btn primary-btn btn-sm">Send</button>
                    </form>
                </div>
            </div>

        </div>



    );
};

export default EmailContact;