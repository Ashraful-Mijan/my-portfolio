import React from 'react';
import './Project.css'

const Project = ({ project }) => {
    return (
        <div className="col-md-4 mb-3 mb-md-0 px-3 px-md-0">
            <div className="portfolio-effect">
                <div className="portfolio-item portfolio-effect__item portfolio-item--eff1">

                    <img className="portfolio-item__image w-100 h-100" src={project.img} alt="Portfolio Item" />

                    <div className="portfolio-item__info">

                        <h3 className="portfolio-item__header">{project.name}</h3>

                        <div className="portfolio-item__links">

                            <div className="portfolio-item__link-block me-2">

                                <a className="btn btn-primary" href="/" target="_blank" >
                                    <span>Website</span>
                                </a>

                            </div>

                            <div className="portfolio-item__link-block ">

                                <a className="btn btn-primary" href="/" target="_blank">
                                    <span>Github</span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;