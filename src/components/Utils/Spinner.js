import React, { Fragment } from 'react';
import { Spinner as BSpinner } from 'react-bootstrap';

const Spinner = () => (
    <Fragment>
        <div className="text-center">
            <BSpinner animation="border" className="my-5" />
        </div>
    </Fragment>
);

export default Spinner;
