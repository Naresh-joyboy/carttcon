import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/pop"><FaCartPlus /></Nav.Link>
            <div className='numb'>{}</div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars