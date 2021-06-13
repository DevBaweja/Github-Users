import React, { Fragment, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import Repos from '../Repo/Repos';
import Spinner from '../Utils/Spinner';
import Tabs from '../Utils/Tabs';

import { selectLoading } from '../../redux/user/user.selector';
import GithubContext from '../../context/github/githubContext';

import { Container, Button, Row, Col, Image, Badge } from 'react-bootstrap';

const User = ({ match, loading }) => {
    const githubContext = useContext(GithubContext);

    const { getUser, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.username);
        getUserRepos(match.params.username);
    }, []);

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
    } = user;

    if (loading) return <Spinner />;

    const details = [login, location, company, blog];
    const detailsHtml = ['Username', 'Location', 'Company', 'Website'];
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <Button as={Link} to="/" variant="dark" className="my-2">
                            Back to Home
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Row>
                            <Image src={avatar_url} thumbnail className="mb-2" />
                        </Row>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <span>
                                <h3>{name}</h3>
                            </span>
                            {bio && (
                                <Fragment>
                                    <p>{bio}</p>
                                </Fragment>
                            )}
                        </Row>
                        <hr />
                        <Row className="mt-2">
                            <Col md={3}>
                                <strong>Followers</strong>
                                <p>{followers}</p>
                            </Col>
                            <Col md={3}>
                                <strong>Following</strong>
                                <p>{following}</p>
                            </Col>
                            <Col md={3}>
                                <strong>Public Repos</strong>
                                <p>{public_repos}</p>
                            </Col>
                            <Col md={3}>
                                <strong>Public Gists</strong>
                                <p>{public_gists}</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={7}>
                                {details.map((detail, index) => (
                                    <Fragment>
                                        {detail && (
                                            <Row className="mb-2">
                                                <Col md={6} className="ml-2">
                                                    <strong>{detailsHtml[index]}</strong>
                                                </Col>
                                                <Col md={6}>{detail}</Col>
                                            </Row>
                                        )}
                                    </Fragment>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}>
                        <Row className="my-1">
                            <Button variant="dark">Follow</Button>
                        </Row>
                        <Row className="my-1">
                            <Button href={html_url} variant="light">
                                View Github
                            </Button>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Tabs>
                    Repos
                    <Container>
                        <Repos repos={repos} />
                    </Container>
                    Followers
                    <Container>Followers</Container>
                    Following
                    <Container>Following</Container>
                </Tabs>
            </Container>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    loading: selectLoading,
});

export default connect(mapStateToProps)(User);
