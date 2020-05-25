import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'

const NavigationBar = () => {

    return (
    <Navbar bg="light" variant="light" expand >
  <Navbar.Brand href="/">restaurant-app</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto justify-content-end">
    <Form inline>
      <FormControl type="text"  size="lg" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
     
     
    </Nav>
    
    <NavDropdown title="sign-in" id="basic-nav-dropdown" >
        <NavDropdown.Item href="/signin" >user</NavDropdown.Item>
        <NavDropdown.Item href="/vendor" >vendor</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/signup" >create account</NavDropdown.Item>
        
       
      </NavDropdown>
      <Nav.Link href="#home">shopping cart</Nav.Link>
  </Navbar.Collapse>
</Navbar>
    )

}

export default NavigationBar;
