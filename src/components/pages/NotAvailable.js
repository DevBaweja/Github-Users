import React, { Fragment } from 'react';

const NotAvailable = () => {
    return (
        <Fragment>
            <div className="text-center my-5">
                <h2>Webpage is not available.</h2>
                <p className="lead">The page you are looking for does not exist...</p>
            </div>
        </Fragment>
    );
};

export default NotAvailable;
