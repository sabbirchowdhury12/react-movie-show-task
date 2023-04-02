import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineClock, HiOutlineThumbUp } from 'react-icons/hi';

const ShowSingleCard = ({ show }) => {
    console.log(show.show);
    return (
        <div className='card'>
            <img src={show.show.image?.medium ? show.show.image?.medium : 'https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg'
            } alt="" />
            <div className="content">
                <h3>{show.show.name}</h3>
                <p className='white'>{show.show.language ? show.show.language : 0}</p>
            </div>
            <div className="content">
                <p className='hd'>HD</p>
                <div className="content">
                    <HiOutlineClock className='yellow' />
                    <p className='white'>{show.show.averageRuntime} min</p>
                    <HiOutlineThumbUp className='yellow' />
                    <p className='white'>{show.show.rating?.average ? show.show.rating?.average : 0}</p>
                </div>
            </div>
            <Link to={`/show/${show.show.id}`} ><button>Deatails</button></Link>

        </div>
    );
};

export default ShowSingleCard;