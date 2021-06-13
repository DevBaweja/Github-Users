import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container as BContainer, Nav as BNav, Navbar as BNavbar } from 'react-bootstrap';

const Navbar = ({ icon, title }) => {
    const style = { all: 'unset', color: 'rgba(0,0,0,.9)' };
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
                                <BNav.Link>
                                    <Link href="/" to="/" style={style}>
                                        Home
                                    </Link>
                                </BNav.Link>
                                <BNav.Link>
                                    <Link href="/login" to="/login" style={style}>
                                        Login
                                    </Link>
                                </BNav.Link>
                                <BNav.Link>
                                    <Link href="/about" to="/about" style={style}>
                                        About
                                    </Link>
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
