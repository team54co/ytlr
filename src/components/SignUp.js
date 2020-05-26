import React, {useState} from 'react';
import { Form, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import {register} from '../auth/Fire';



const SignUp = () => {
    const [key, setKey] = useState('user');
    const [name, setName] = useState('testUser')
    const [email, setEmail] = useState('test@user.com')
    const [password, setPassword] = useState('password')
    const signUp = (e) => {
        e.preventDefault();
        const reg = register(name,email,password)
    };
    

  
    return (
        <Container>
        <Row className="py-4">
            <Col md={{span: 6, offset: 3}}>
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="user" title="User">
       
              <Form>
              <h1>New? Signup, is free!</h1> 
                  <Form.Group controlId="formBasicUsername">
                  
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="username" />
                        </Form.Group>
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
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={signUp}>
                            Create Account
                        </Button>
                    </Form>
                    
             
        </Tab>
        <Tab eventKey="vendor" title="Vendor">
              <Form>
              <h1>Start Selling Online</h1> 
                  <Form.Group controlId="formBasicUsername">
                            <Form.Label>Shop Name</Form.Label>
                            <Form.Control type="text" placeholder="username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="username" />
                        </Form.Group>
               
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
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={signUp}>
                            Create Account
                        </Button>
                    </Form>
           
        </Tab>
       
      </Tabs>
      </Col>
      </Row>
      </Container>
    );
  }
  export default SignUp;