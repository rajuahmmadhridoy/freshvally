import React, { useEffect, useState } from 'react';
import {userContext} from '../../App.js'
import { useContext } from 'react';
import { Card, Container, ListGroup, Row } from 'react-bootstrap';
import './Orderd.css'


const Orderd = () => {
    const [ordered,setOrderd] = useState([])
    const [loggedInUser, setLogedInUser] = useContext(userContext)
    useEffect(()=>{
        fetch(`http://localhost:5050/productjegulaod?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrderd(data))
    },[])
    console.log('ordered product',ordered);
    return (
        <div>
            {
                ordered.map(hey => 
                   <Container>
                     <Row>
                         <div className="col-md-6 offset-md-3 orderdCardMain">
                         <Card className="orderdCard">
                        <ListGroup variant="flush">
                            <ListGroup.Item>email:{hey.email}</ListGroup.Item>
                            <ListGroup.Item>Name:{hey.name}</ListGroup.Item>
                            <ListGroup.Item>quantity: {hey.weight}</ListGroup.Item>
                            <ListGroup.Item>Price: {hey.price}</ListGroup.Item>
                            <ListGroup.Item>Date: {(new Date(hey.newDate).toDateString('dd/MM/yyyy'))}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <button>Delate</button>
                         </div>
                     </Row>
                   </Container>
                    
                )
            }
        </div>
    );
};

export default Orderd;