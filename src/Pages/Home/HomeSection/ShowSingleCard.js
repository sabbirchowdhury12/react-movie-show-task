import React from 'react';
import { Link } from 'react-router-dom';

const ShowSingleCard = ({ show }) => {
    console.log(show.show);
    return (
        <div className='card'>
            <img src={show.show.image?.medium
            } alt="" />
            <div className="content">
                <h3>{show.show.name}</h3>
                <p>{show.show.language ? show.show.language : 0}</p>
            </div>
            <div className="content">
                <p>HD</p>
                <div className="content">
                    <p>{show.show.averageRuntime} min</p>
                    <HiOutlineClock />
                    <p>{show.show.rating?.average ? show.show.rating?.average : 0}</p>
                </div>
            </div>
            <Link to={`/show/${show.show.id}`}>See Details</Link>
        </div>
    );
};

export default ShowSingleCard;