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
        <section className="py-5" style={{ backgroundColor: '#131F33', height: '100%', minHeight: '100vh' }}>
            <div className="container">
                <div className="row m-1 m-md-0">
                    <div className="col-md-6 offset-md-3 text-start py-3 px-4 rounded" style={{backgroundColor: '#19273E'}}>

                        <form className="" onSubmit={sendEmail}>
                            <h5 className='text-white py-3 text-center'>GET IN TOUCH</h5>
                            <div className="mb-3 ">
                                <input type="text" className="form-control" name="name" placeholder="Your Name*" />
                            </div>
                            <div className="mb-3 ">
                                <input type="text" className="form-control " name='subject' placeholder="Subject*" />
                            </div>
                            <div className="mb-3 ">
                                <input type="text" className="form-control " name='email' placeholder="Your Email*" />
                            </div>
                            <div className="mb-3 ">
                                <textarea name="message" cols="15" rows="5" className="form-control " placeholder="write message*"></textarea>
                            </div>
                            <button type="submit" className="btn primary-btn btn-sm">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailContact;