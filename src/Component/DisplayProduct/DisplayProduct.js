import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DisplayProduct.css'

const DisplayProduct = (props) => {
    const {_id,name,imageURL,price,weight} = props.product;
    // console.log(key)
    return (
        <div className="col-md-3 mt-5">
            <Card>
            <div className="cardImage">
            <Card.Img variant="top" src={imageURL} />
            </div>
            <Card.Body>
                <Card.Title className="primary">{name}</Card.Title>
                <Card.Text>
                quantity: {weight} 
                </Card.Text>
                <Card.Text>
                   price: {price} Tk
                </Card.Text>
                <Button as={Link} to={`/singleproduct/${_id}`} variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayProduct;