import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className="error-page">
            <h1>Oops! Something went wrong...</h1>
            <p>We're sorry, but the page you requested could not be found.</p>
            <Link to='/'><button>BACK TO HOME</button></Link>
        </div>
    );

};

export default ErrorPage;