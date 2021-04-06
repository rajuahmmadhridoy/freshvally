import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
          <Container>
              <Row>
                  <div className="col-md-6 logo">
                      <Link to="/">Freshvally</Link>
                  </div>
                  <div className="mainMenu col-md-6">
                  <nav>
                <ul className='menu d-flex justify-content-around '>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/orderd">Oraders</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/doats">Doats</Link>
                </li>
                <li>
                    <Link to="/login">Ligin</Link>
                </li>
                </ul>
            </nav>
                  </div>
              </Row>
          </Container>
    );
};

export default Header;