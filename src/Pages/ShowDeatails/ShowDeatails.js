import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import style from '../ShowDeatails/card.module.css';
import BookModalFrom from '../../Components/BookModalFrom';

const ShowDeatails = () => {
    const show = useLoaderData();
    const [showModal, setShowModal] = useState(null);

    return (
        <div className={style.card}>
            <img src={show?.image?.medium
            } alt="" />
            <div className={style.cardText}>
                <h2>{show.name}</h2>
                <p><a href="/">Summary:</a>  {show.summary.replace('<p>', '').replace('<b>', '').replace('</b>', '').replace('</p>', '').replace('</p>', '')}</p>
                <div className='content'>
                    <p className='white'>{show.averageRuntime} min</p>
                    <p className='white'>{show.genres[0]}</p>
                    <p className='white'>{show.schedule.days[0] ? show.schedule.days[0] : 'Today'}, {show.schedule.time ? show.schedule.time : '01-02-2023'} </p>
                </div>
                <Link><button onClick={() => setShowModal(show)}>Book Ticket</button></Link>
            </div>


            {showModal && <BookModalFrom setShowModal={setShowModal} showModal={showModal} />}


        </div>
    );
};

export default ShowDeatails;