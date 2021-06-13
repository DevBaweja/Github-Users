import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Login = () => {
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
                <Form.Group as={Row} className="mb-4" controlId="formHorizontalText">
                    <Form.Label column md={{ offset: 2, span: 1 }}>
                        Username
                    </Form.Label>
                    <Col md={{ offset: 1, span: 6 }}>
                        <Form.Control type="text" placeholder="Enter Username" value={text} onChange={onChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
                    <Form.Label column md={{ offset: 2, span: 1 }}>
                        Password
                    </Form.Label>
                    <Col md={{ offset: 1, span: 6 }}>
                        <Form.Control
                            type="password"
                            placeholder="Enter Personal Token"
                            value={text}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mt-4">
                    <Col>
                        <Button type="submit" variant="dark">
                            Log in
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;
