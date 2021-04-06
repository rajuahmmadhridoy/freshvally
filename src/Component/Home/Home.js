
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
const Home = () => {
    const [product, setProduct] = useState([]);
   useEffect(()=>{
     fetch('http://localhost:5050/product')
     .then(res => res.json())
     .then(data => setProduct(data))
   },[])
    return (
                
              <Container>
                   <Row>
                   {
                    product.map(product => <DisplayProduct product={product}></DisplayProduct> )
                      }
                   </Row>
              </Container>
    );
};

export default Home;