import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const UserItem = ({ user: { login, avatar_url } }) => {
    const style = { all: 'unset', cursor: 'pointer', color: 'rgba(0,0,0,0.9)' };
    return (
        <Col>
            <Card variant="light" className="text-center">
                <Card.Img variant="top" src={avatar_url} />
                <Card.Body>
                    <Card.Title>{login}</Card.Title>
                </Card.Body>
                <Card.Footer as={Link} to={`/user/${login}`} className="text-muted text-decoration-none">
                    View Profile
                </Card.Footer>
            </Card>
        </Col>
    );
};
/*
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
            <h3>{login}</h3>

            <div>
                <Link to={html_url} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
};
*/

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
