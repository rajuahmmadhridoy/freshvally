
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './ManageProduct.css'
const ManageProduct = () => {
    const [product, setProduct] = useState([]);
   useEffect(()=>{
     fetch('https://freshvally.herokuapp.com/product')
     .then(res => res.json())
     .then(data => setProduct(data))
   },[])
  //  console.log('object', product[0]._id);
  const deleteProduct = (id)=>{
    fetch(`https://freshvally.herokuapp.com/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully", result);
            })
  }
    return (
                
              <Container>
                   <Row>
                   {
                       product.length === 0 && 
                     <div class=" spinner" role="status">
                     <span className="loading">Loading...</span>
                   </div>
                     }
                   <table>
                   <thead>
                     <tr>
                         <th>name</th>
                         <th>weight</th>
                         <th>price</th>
                         <th>Action</th>
                     </tr>
                     </thead>
                   </table>
                   {
                    product.map(product =>
                      
                      <table className="manageTable">
                        <tbody>
                         <tr>
                         <td>{product.name}</td>
                          <td>{product.weight}</td>
                          <td>{product.price}</td>
                          <td><button className="deleteBtn"  onClick={() => deleteProduct(product._id)}>delete</button></td>
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