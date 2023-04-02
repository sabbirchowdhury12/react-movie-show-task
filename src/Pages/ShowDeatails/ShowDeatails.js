import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ShowDeatails = () => {
    const show = useLoaderData();
    return (
        <div className='cardss'>
            <img src={show?.image?.medium
            } alt="" />
            <div className="card-text">
                <p>{show.summary.replace('<p>', '').replace('<b>', '').replace('</b>', '').replace('</p>', '')}</p>
                <p className='white'>{show.averageRuntime} min</p>
            </div>
        </div>
    );
};

export default ShowDeatails;