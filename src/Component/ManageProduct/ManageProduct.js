
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
const ManageProduct = () => {
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
                    product.map(product =>
                      
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
                         <td>{product.name}</td>
                          <td>{product.weight}</td>
                          <td>{product.price}</td>
                         </tr>
                        </tbody>
                      </table>

                      )
                    }
                   </Row>
              </Container>
    );
};

export default ManageProduct;