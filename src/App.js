import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import product from "./database/data";
import Productlist from "./component/Productlist";
import Detail from "./component/Detail";
import { Link, Route, Routes, Switch } from "react-router-dom";

function App() {
  let [shose, setShose] = useState(product);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              <div className="jumbo_container">
                <div className="inner">
                  <h1>20% Season Off</h1>
                  <p>
                    this is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information
                  </p>
                  <p>
                    <Button variant="primary"> Learn More</Button>
                  </p>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  {shose.map((shoese) => (
                    <Productlist id={shoese.id} product={shoese} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shose} />} />
      </Routes>
    </div>
  );
}

export default App;
