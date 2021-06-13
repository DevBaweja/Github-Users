import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLoading, selectAllUsers } from '../../redux/user/user.selector';

import { Row, Col, Card } from 'react-bootstrap';
import UserItem from './UserItem';
import Spinner from '../Utils/Spinner';

const Users = ({ loading, allUsers }) => {
    if (loading) return <Spinner />;
    return (
        <Fragment>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {allUsers.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </Row>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
    allUsers: selectAllUsers,
});

export default connect(mapStateToProps)(Users);
