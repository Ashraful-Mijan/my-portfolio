import React from 'react';

const SingleAllProjects = ({ data }) => {
    return (
        <div className="mb-3 col-md-8 offset-md-2 text-white">
            <div className="single-project">
                <div className="project-img">
                    <img src={data.img} alt="" className="w-100" />
                </div>
            </div>
            <div className="py-2 mb-3">
                <div>
                    <a href={data.liveLink} target="_target" className="btn primary-btn ">Website</a>
                    <a href={data.repo} className="btn primary-btn ms-1">Github</a>
                </div>
                <div className='mt-2 mb-3'>
                    <p className="m-0">{data.name}</p>
                    <p className="m-0"><span className="text-info">Technology Used:</span> {data.tech}</p>
                    <p>{data.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleAllProjects;