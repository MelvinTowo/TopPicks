import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import SearchBar from './SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './Assets/Screenshot.png';
// import { useAuth } from "../Contexts/AuthContext";


export default function NavBar() {
 
  function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props} >
          {children}
        </Link>
      </li>
    )
  }

  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
      <Navbar.Brand> 
      <Nav.Link as={Link} to={"./Explore"}><img src={logo} alt="Logo" width="100px" height="50px" className="logo" />{' '}</Nav.Link>
        
      </Navbar.Brand>
      
      <Navbar.Toggle />


      <Navbar.Collapse> 
      
      <SearchBar placeholder={"Search for anything"} data={""} />
      
      <Nav className="options">
      <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
      <Nav.Link as={Link} to={"/Explore"}>Explore</Nav.Link>
      <NavDropdown title="Settings">
          <NavDropdown.Item ><CustomLink to="/About">About</CustomLink></NavDropdown.Item>
          <NavDropdown.Item ><CustomLink to="/Favourites">Favourites</CustomLink></NavDropdown.Item>
          <NavDropdown.Item ><CustomLink to="/ContactUS">Contact us</CustomLink></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="AddTopPick">Create a new TopPick</Nav.Link>
      <NavDropdown title= {<AccountCircleIcon />}>
        <NavDropdown.Item href="./Login">
          Log out
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  
);

}

