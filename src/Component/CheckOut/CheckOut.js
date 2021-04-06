import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './CheckOut.css'
import {userContext} from '../../App.js'
import { Link } from 'react-router-dom';

const CheckOut = () => {
   const {key} = useParams();
   const [checkOut,setCheckOut] = useState([]);
   const [loggedInUser, setLogedInUser]= useContext(userContext)
   const email = loggedInUser.email;
   const {name,price,weight,imageURL} = checkOut;
   const newDate = new Date();
    const newCheckOutProduct ={
        price:price,
        weight:weight,
        name:name,
        image:imageURL,
        newDate

    }

    const CheckOutOrderd = () =>{
        const orderd = {...newCheckOutProduct,email}
        const url = `http://localhost:5050/orderdProduct?email=`+email;
        fetch(url, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderd)
        })
        .then(res => console.log('server side responsed',res))
    };
    


const url = `http://localhost:5050/product/${key}`;
useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setCheckOut(data[0]))
},[key])
console.log(checkOut);
    return (
        <Container>
            <Row>
                <div className="col-md-12 tableContainer ">
                    <h1>Check out</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>weight</th>
                            <th>price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{weight}</td>
                            <td>{price}Tk</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>Total price</td>
                            <td><u>Total=  {price*weight}Tk only</u></td>
                        </tr>
                        </tbody>
                    </table>
                    
                <Link to="/orderd"><button  onClick={CheckOutOrderd}> Check Out</button></Link>
                </div>
            </Row>
        </Container>
    );
};

export default CheckOut;