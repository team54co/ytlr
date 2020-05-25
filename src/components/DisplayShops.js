import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
const imgUrl = 'https://img.freepik.com/free-photo/women-are-shopping-summer-she-is-using-credit-card-enjoys-shopping_46139-3.jpg?size=626&ext=jpg'
const shopImg = 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png'
const DisplayShops = () => {

    const shops = ["Charles", "kentucky", "mcdonalds", "chickenrice", "briyani", "Charles", "kentucky", "mcdonalds", "chickenrice", "briyani"]
    return (

  
        <Container fluid>
            <Row className="my-4">
                <Col md={3} className="bg-light justify-content-start">

                    filters column
                </Col>
                <Col md={9}>
                    <div className="d-flex flex-wrap justify-content-center">
                        {shops.map(name => {

                            return (
                                <Card style={{ width: '15rem' }} className="m-3 shadow">
                                    <Card.Img variant="top" src={imgUrl} />
                                    <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text. This can be description.
                                        </Card.Text>
                                        <Button variant="primary" href="/shops/example">Go inside</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>

                </Col></Row>

        </Container>
        
    )
}

export default DisplayShops;