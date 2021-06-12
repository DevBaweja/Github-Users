import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import { Form, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const Search = () => {
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        githubContext.searchUsers(text);
        setText('');
    };

    const onChange = event => setText(event.target.value);

    return (
        <div className="text-center my-3">
            <Form onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col xm="auto">
                        <InputGroup>
                            <InputGroup.Text>@</InputGroup.Text>
                            <FormControl placeholder="Username" value={text} onChange={onChange} />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Search;
