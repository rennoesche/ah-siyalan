import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">React-Bootstrap Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
