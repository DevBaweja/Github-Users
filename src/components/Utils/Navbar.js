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
                            <FontAwesomeIcon icon={icon} /> {title}
                        </BNavbar.Brand>
                        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
                        <BNavbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <BNav>
                                <BNavbar.Text className="me-auto">
                                    <Link href="/" to="/">
                                        Home
                                    </Link>
                                    <Link href="/login" to="/login">
                                        Login
                                    </Link>
                                    <Link href="/about" to="/about">
                                        About
                                    </Link>
                                    {/*
                                    <BNav.Link href="/home">Home</BNav.Link>
                                    <BNav.Link href="/login">Login</BNav.Link>
                                    <BNav.Link href="/about">About</BNav.Link> 
                                    */}
                                </BNavbar.Text>
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
