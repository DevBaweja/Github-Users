import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setQuery, searchUsersStart } from '../../redux/user/user.actions';
import { selectQuery } from '../../redux/user/user.selector';
import { Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const Search = ({ query, setQuery, searchUsers }) => {
    const onSubmit = e => {
        e.preventDefault();
        searchUsers();
    };

    const onChange = event => setQuery(event.target.value);

    return (
        <div className="text-center my-3">
            <Form onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col md={{ span: 5, offset: 3 }} className="mb-4">
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl placeholder="Username" value={query} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col xs="auto" className="mb-4">
                        <Button type="submit" variant="dark">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    query: selectQuery,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setQuery, searchUsers: searchUsersStart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Search);
