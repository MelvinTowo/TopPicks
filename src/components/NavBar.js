import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from'./About';
import Home from './Home';
import Favourites from './Favourites';
import Faq from './Faq';
import ContactUS from './ContactUS';
import './Navbar.css';
import logo from './Screenshot.png';

export default class NavBar extends Component {
  render() {
    return (
        <div className="navBar">
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
        <Navbar.Brand> 
        <img src={logo} width="70px" height="50px" />{' '}
        TopPicks
        </Navbar.Brand>
        
        <Navbar.Toggle />
        <Navbar.Collapse>
        
        <Nav className="options">
        <Nav.Link href="./home">Home</Nav.Link>
        <NavDropdown title="Settings">
            <NavDropdown.Item href="About">About</NavDropdown.Item>
            <NavDropdown.Item href="Favourites">Favourites</NavDropdown.Item>
            <NavDropdown.Item href="Customize">Customize</NavDropdown.Item>
            <NavDropdown.Item href="Help">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="ContactUS">Contact US</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="AddTopPick">Create a new TopPick</Nav.Link>
      </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
          <Routes>
              <Route path='/Home' element={<Home />}></Route>
              <Route path='/Favourites' element={<Favourites />}></Route>
              <Route path='/About' element={<About />}></Route>
              <Route path='/ContactUS' element={<ContactUS />}></Route>
          </Routes>
      </div>

      </div>
    );
  }
}

