import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from './Assets/Screenshot.png';
// import { useAuth } from "../Contexts/AuthContext";


export default function NavBar() {
 
  // const { logout } = useAuth();
  // const navigate = useNavigate();
  // const [setError] = useState("");

  // async function handleLogout(){
  //   setError('')

  //   try {
  //     await logout()
  //     navigate.push("/login")
  //   } catch {
  //     setError('Failed to logout')
  //   }
  // }
  return (
    <div className="navBar">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg" >
      <Navbar.Brand> 
      <Nav.Link href="./Explore"><img src={logo} alt="Logo" width="100px" height="50px" className="logo" />{' '}</Nav.Link>
        
      </Navbar.Brand>
      
      <Navbar.Toggle />


      <Navbar.Collapse> 
      
      <SearchBar placeholder={"Search for anything"} data={""} />
      
      <Nav className="options">
      <Nav.Link href="./Home">Home</Nav.Link>
      <Nav.Link href="./Explore">Explore</Nav.Link>
      <NavDropdown title="Settings">
          <NavDropdown.Item as={Link} to={"/About"}>About</NavDropdown.Item>
          <NavDropdown.Item href="/Favourites">Favourites</NavDropdown.Item>
          <NavDropdown.Item href="./ContactUS">Contact US</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="AddTopPick">Create a new TopPick</Nav.Link>
      <NavDropdown title= {<AccountCircleIcon />}>
        <NavDropdown.Item href="/Login">
          Log out
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
      </Navbar.Collapse>
    </Navbar>
<div>
{/* <Routes>
    <Route path='/Home' element={<Home />}></Route>
    <Route excact path='/Explore' element={<Explore />}></Route> 
    <Route path='/Favourites' element={<Favourites />}></Route>
    <Route path='/About' element={<About />}></Route>
    <Route path='/ContactUS' element={<ContactUS />}></Route>
    <Route path='/FAQ' element={<Faq />}></Route>
    <Route path='/Contents' element={<Contents />}></Route>
</Routes> */}
</div>
  </div>
  
);

}

