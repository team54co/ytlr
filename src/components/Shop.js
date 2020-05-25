import React from 'react';
import { Media, Container, Row } from 'react-bootstrap'
import DisplayShopItems from './DisplayShopItems'
const imgUrl = 'https://img.freepik.com/free-photo/women-are-shopping-summer-she-is-using-credit-card-enjoys-shopping_46139-3.jpg?size=626&ext=jpg'
const shopImg = 'https://d701vexhkz032.cloudfront.net/bundles/front/media/images/favicons/favicon-512.png'

const Shop = () => {

    return (

        <Container>
            <Row className="my-3">
                <Media>
                    <img
                        width={100}
                        height={100}
                        className="mr-3"
                        src={shopImg}
                        alt="shop name"
                    />
                    <Media.Body>
                        <h3>Plaza McDonals</h3>
                        <p>
                            We love to serve people.
    </p>
                    </Media.Body>
                </Media>
                </Row>
                <Row>


                    <DisplayShopItems />
                </Row>
        </Container>
    )
}

export default Shop;