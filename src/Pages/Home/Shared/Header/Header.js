import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider';
import LeftSideNAv from './LeftSideNAv';

const Header = () => {
  const {user,logOut}= useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.error(error)
    })
  }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home"><Link to='/'>News24</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                <>
                 <span>  {user?.displayName}</span>
                 <button onClick={handleLogOut} className='ms-2 btn btn-primary rounded '>LogOut</button>
                </>
                 :
                 
                <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                </>
              }
              
            
            
            </Nav.Link>

            <Link to='/profile'>
              {user?.photoURL?
              <Image style={{height:'40px'}} roundedCircle src={user?.photoURL}></Image> :
              <FaUser></FaUser>
              }
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNAv></LeftSideNAv>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;