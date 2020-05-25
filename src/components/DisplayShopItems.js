import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap'
const imgUrl = 'https://img.freepik.com/free-photo/women-are-shopping-summer-she-is-using-credit-card-enjoys-shopping_46139-3.jpg?size=626&ext=jpg'
const shopImg = 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png'
const DisplayShopItems = () => {

    const shops = ["Charles", "Charles", "kentucky", "mcdonalds", "chickenrice", "briyani"]
    return (


        <Container fluid>
            <Row className="my-4">
                <Col md={3} className="bg-light justify-content-start">

                    filters column
                </Col>
                <Col md={9} xs={12}>
                    <Row>
                    <h2>Popular</h2>
                    </Row>
                    
                    <div className="d-flex flex-wrap justify-content-between">
                        
                        {shops.map(name => {

                            return (
                                <div class="card m-2 shadow" style={{width: '240px', height: '7rem'}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" id="shop-item-img">
                                            
                                       </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">This is a wider caconteger.</p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                         </div>
                         
                         <Row>
                    <h2>Veggies </h2>
                    </Row>
                    
                    <div className="d-flex flex-wrap justify-content-between">
                        
                        {shops.map(name => {

                            return (
                                <div class="card h-100 m-2 shadow" style={{maxWidth: '240px', height: '7rem'}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" id="shop-item-img">
                                            
                                       </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <h5 class="card-title">Card title</h5>
                                                    <p class="card-text">This is a wider caconteger.</p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })}
                         </div>
                         

                </Col></Row>

        </Container>
        
    )
}

export default DisplayShopItems;
