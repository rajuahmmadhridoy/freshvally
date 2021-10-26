import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css'
const axios = require('axios');

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const productData = {
             name:data.name,
             price:data.price,
             weight:data.weight,
             imageURL:imageURL

        }
        const url = `https://freshvally.herokuapp.com/addProduct`
        console.log(productData)
        fetch(url, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side responsed',res))
    };
    
    
    const handleImageUpload = event => {
        // console.log(event.target.files)
        const imageData = new FormData();
        imageData.set('key','5783c13871a33e621baa34366c83ae74')
        imageData.append('image', event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="allInput d-flex align-items-center">
              <div className="namePrice">
                <p>Product Name</p>
                  <input className="in" name="name" defaultValue="product name" ref={register} />
                      <br/>
                      <p>Product Price</p>
                      <input className="in" name="price" defaultValue="product price" ref={register} />
              </div>
              <div className="weidthFile">
              <p>Product Weight</p>
                  <input className="in" name="weight" defaultValue="product weight" ref={register} />
                      <br/>
                      <p>Product Image</p>
                      <input className="in" name="exampleRequired" type="file" onChange={handleImageUpload}/>
              </div>
            </div>
              {errors.exampleRequired && <span>This field is required</span>}
              <input className="submitBtn" type="submit" />
          </form>
    );
};

export default AddProduct; 