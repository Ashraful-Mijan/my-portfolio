import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills bg-skills py-5" id="skills">
            <div className="container">
                <h3 className="text-center my-5 text-common">I AM GOOD AT</h3>
                
                <hr className="bg-white" />
                <div className="row py-5">
                    <div className="col-md-6 px-5 pb-3 pb-md-0">
                        <div className="progress mb-5" style={{ height: '30px' }}>
                            <div className="progress-bar  fs-5" role="progressbar" style={{ width: '99%', backgroundColor: "#8CC090" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                javascript 99%
                            </div>
                        </div>
                        <div className="progress mb-5" style={{ height: '30px' }}>
                            <div className="progress-bar  fs-5 " role="progressbar" style={{ width: '85%', backgroundColor: "#8CC090" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                React.js 80%
                            </div>
                        </div>
                        <div className="progress" style={{ height: '30px' }}>
                            <div className="progress-bar  fs-5 " role="progressbar" style={{ width: '75%', backgroundColor: "#8CC090" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                Bootstrap 75%
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 px-5 pb-3 pb-md-0">
                        <div className="progress mb-5" style={{ height: '30px' }}>
                            <div className="progress-bar  fs-5 " role="progressbar" style={{ width: '75%', backgroundColor: "#8CC090" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                Node.js 75%
                            </div>
                        </div>
                        <div className="progress mb-5" style={{ height: '30px' }}>
                            <div className="progress-bar  fs-5 " role="progressbar" style={{ width: '60%', backgroundColor: "#8CC090" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                Express.js 60%
                            </div>
                        </div>
                        <div className="progress mb-5" style={{ height: '30px' }}>
                            <div className="progress-bar  fs-5 " role="progressbar" style={{ width: '85%', backgroundColor: "#8CC090" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                MongoDB 75%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;