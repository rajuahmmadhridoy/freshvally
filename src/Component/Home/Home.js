
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import './Home.css'
const Home = () => {
    const [product, setProduct] = useState([]);
   useEffect(()=>{
     fetch('https://peaceful-lake-64650.herokuapp.com/product')
     .then(res => res.json())
     .then(data => setProduct(data))
   },[])
    return (
                
              <Container>
                   <Row>
                     {
                       product.length === 0 && 
                     <div class=" spinner" role="status">
                     <span className="loading">Loading...</span>
                   </div>
                     }
                   {
                    product.map(product => <DisplayProduct product={product}></DisplayProduct> )
                      }
                   </Row>
              </Container>
    );
};

export default Home;