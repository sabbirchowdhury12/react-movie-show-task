import React, { useEffect, useState } from 'react';
import ShowSingleCard from './ShowSingleCard';
import '../../../Utilities/Custom.css';

const ShowSection = () => {

    const [shows, setShows] = useState([]);

    useEffect(() => {

        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(data => setShows(data));
    }, []);


    return (
        <div className='container'>
            <h2>Chose Your Show</h2>

            <div className='cards'>
                {
                    shows.map(show => <ShowSingleCard show={show} key={show.show.id} />)
                }

            </div>
        </div>
    );
};

export default ShowSection;