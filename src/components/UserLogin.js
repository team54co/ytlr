import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const UserLogin = () => {

    return (
        <Container>


            <Row className="my-4 shadow">
        
            <Col className="bg-primary"></Col>


                <Col className="p-5">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label> Email address </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                
            </Row>
        </Container>

    )

}

export default UserLogin;