import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavbarBrand, NavDropdown, Placeholder } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from'./About';
import Home from './Home';
import Explore from './Explore';
import Favourites from './Favourites';
import Faq from './Faq';
import ContactUS from './ContactUS';
import SearchBar from './SearchBar';

import logo from './Screenshot.png';

export default class NavBar extends Component {
  render() {
    return (
        <div className="navBar">
        <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
        <Navbar.Brand> 
        <Nav.Link href="./Explore"><img src={logo} width="100px" height="50px" className="logo" />{' '}</Nav.Link>
           
        </Navbar.Brand>
        
        <Navbar.Toggle />


        <Navbar.Collapse> 
        
        <SearchBar placeholder={"Search for anything"} data={""} />
        
        <Nav className="options">
        <Nav.Link href="./home">Home</Nav.Link>
        <Nav.Link href="./Explore">Explore</Nav.Link>
        <NavDropdown title="Settings">
            <NavDropdown.Item href="About">About</NavDropdown.Item>
            <NavDropdown.Item href="Favourites">Favourites</NavDropdown.Item>
            <NavDropdown.Item href="Customize">Customize</NavDropdown.Item>
            <NavDropdown.Item href="FAQ">FAQ</NavDropdown.Item>
            <NavDropdown.Item href="ContactUS">Contact US</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="AddTopPick">Create a new TopPick</Nav.Link>
      </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
          <Routes>
              <Route path='/Home' element={<Home />}></Route>
              <Route path='/Explore' element={<Explore />}></Route> 
              <Route path='/Favourites' element={<Favourites />}></Route>
              <Route path='/About' element={<About />}></Route>
              <Route path='/ContactUS' element={<ContactUS />}></Route>
              <Route path='/FAQ' element={<Faq />}></Route>
          </Routes>
      </div>

      </div>
    );
  }
}

