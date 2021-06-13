import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const RepoItem = ({ repo }) => {
    const { name, html_url } = repo;
    console.log(repo);
    return (
        <Card>
            <h6>
                <Button href={html_url} variant="light">
                    {name}
                </Button>
            </h6>
        </Card>
    );
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItem;
