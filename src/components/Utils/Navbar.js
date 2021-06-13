import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container as BContainer, Nav as BNav, Navbar as BNavbar } from 'react-bootstrap';

const Navbar = ({ icon, title }) => {
    return (
        <Fragment>
            <div className="my-3">
                <BNavbar bg="light" expand="lg">
                    <BContainer>
                        <BNavbar.Brand>
                            <FontAwesomeIcon icon={icon} /> <strong>{title}</strong>
                        </BNavbar.Brand>
                        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <BNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <BNav>
                                <BNav.Link as={Link} href="/" to="/">
                                    <strong>Home</strong>
                                </BNav.Link>
                                <BNav.Link as={Link} href="/login" to="/login">
                                    <strong>Login</strong>
                                </BNav.Link>
                                <BNav.Link as={Link} href="/about" to="/about">
                                    <strong>About</strong>
                                </BNav.Link>
                            </BNav>
                        </BNavbar.Collapse>
                    </BContainer>
                </BNavbar>
            </div>
        </Fragment>
    );
};

Navbar.defaultProps = {
    title: 'Github Users',
    icon: 'user-astronaut',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
