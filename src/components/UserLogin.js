import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { login, googleIn, facebookIn } from '../auth/Fire';

const UserLogin = () => {
    const [email, setEmail] = useState('test@user.com')
    const [password, setPassword] = useState('password')
    const signIn = async(e) => {
        e.preventDefault();
        console.log(await login(email,password))   
    }
    const google = (e) => {
        e.preventDefault();
        googleIn();
    }
    const facebook = (e) => {
        e.preventDefault();
        facebookIn();
    }
    

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
                        <Button variant="primary" type="submit" onClick={signIn}>
                            Login
                        </Button> <br></br>
                        <Button variant="primary" type="submit" onClick={google}>
                            Login with Google
                        </Button> <br></br>
                        <Button variant="primary" type="submit" onClick={facebook}>
                            Login with Facebook
                        </Button> <br></br>
                        <Button variant="primary" type="submit">
                            Login with Twitter
                        </Button> <br></br>
                    </Form>
                </Col>
                
            </Row>
        </Container>

    )

}

export default UserLogin;