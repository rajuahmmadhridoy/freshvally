


import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css'
const Admin = () => {
  let { path, url } = useRouteMatch();
  return (
   <div className="manageproductInner">
        <Router>
              <Row>
                <div className="col-md-2">
                  <h2 className="adminHeading">FRESH VALLY</h2>
                  <ul className='manageMenu'>
                    <li>
                      <Link to="/manageproduct">ManageProduct</Link>
                    </li>
                    <li>
                      <Link to="/addproduct">AddProduct</Link>
                    </li>
                    <li>
                      <Link to="/editproduct">Edit Product</Link>
                    </li>
                  </ul>
            </div>
                <div className="col-md-10">

                  <Switch>
                    <Route exact path="/addproduct">
                      <AddProduct />
                    </Route>
                    <Route exact path="/manageproduct">
                      <ManageProduct />
                    </Route>
                    <Route exact path="/editproduct">
                      <EditProduct />
                    </Route>
                  </Switch>
                </div>
              </Row>
          </Router>
   </div>
  );
};

export default Admin;