import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowDeatails = () => {
    const show = useLoaderData();
    console.log(show);
    return (
        <div>

        </div>
    );
};

export default ShowDeatails;