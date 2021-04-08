import React, { useEffect, useState } from 'react';
import {userContext} from '../../App.js'
import { useContext } from 'react';
import { Card, Container, ListGroup, Row } from 'react-bootstrap';
import './Orderd.css'


const Orderd = () => {
    const [ordered,setOrderd] = useState([])
    const [loggedInUser, setLogedInUser] = useContext(userContext)
    useEffect(()=>{
        fetch(`https://peaceful-lake-64650.herokuapp.com/productemail?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrderd(data))
    },[])
    const deleteOrderdProduct = (id)=>{
        fetch(`https://peaceful-lake-64650.herokuapp.com/deleteOrderdProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log("deleted successfully", result);
                })
      }
    return (
        <div>
            {
                ordered.map(product => 
                   <Container>
                     <Row>
                         <div className="col-md-6 offset-md-3 orderdCardMain">
                         <Card className="orderdCard">
                        <ListGroup variant="flush">
                            <ListGroup.Item>email:{product.email}</ListGroup.Item>
                            <ListGroup.Item>Name:{product.name}</ListGroup.Item>
                            <ListGroup.Item>quantity: {product.weight}</ListGroup.Item>
                            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
                            <ListGroup.Item>Date: {(new Date(product.newDate).toDateString('dd/MM/yyyy'))}</ListGroup.Item>
                        </ListGroup>
                        </Card>
                        <button onClick={() => deleteOrderdProduct(product._id)}>delete</button>
                         </div>
                     </Row>
                   </Container>
                    
                )
            }
        </div>
    );
};

export default Orderd;