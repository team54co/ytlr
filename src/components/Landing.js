import React from 'react';

import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap'

const Landing = () => {

    return (
        <div className="principal-page">
            <Jumbotron>
                <h1>Hello There</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
              </p>
                <p>
                    <Button variant="primary" href="/shops">GO TO SHOPS </Button>
                </p>
            </Jumbotron>
            
        </div>
    )

}

export default Landing;