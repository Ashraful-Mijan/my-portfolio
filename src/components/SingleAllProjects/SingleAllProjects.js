import React from 'react';

const SingleAllProjects = ({data}) => {
    return (
        <div className="mb-3 col-md-8 offset-md-2">
            <div className="single-project">
                <div className="project-img">
                    <img src={data.img} alt="" className="w-100" />
                </div>
            </div>
            <div className="">
                <a href={data.liveLink} target="_target" className="sm-button btn btn-primary">Website</a>
                <a href={data.repo} className="sm-button btn btn-primary">Github</a>
                <p>{data.name}</p>
                <p><span className="text-info">Technology Used:</span> {data.tech}</p>
            </div>
        </div>
    );
};

export default SingleAllProjects;