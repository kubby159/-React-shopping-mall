import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import product from "./database/data";
import Productlist from "./component/Productlist";

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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      <div className="jumbo_container">
        <div className="inner">
          <h1>20% Season Off</h1>
          <p>
            this is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information
          </p>
          <p>
            <Button variant="primary"> Learn More</Button>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {shose.map((shoese) => {
            return <Productlist id={shoese.id} product={shoese} />;
          })}
          {/* <div className="col-md-4">
            <img
              className="shoes"
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="상품1"
            />
            <div className="product-details">
              <h4>상품이름</h4>
              <p>상품설명 & 가격</p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="shoes"
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="상품2"
            />
            <div className="product-details">
              <h4>상품명</h4>
              <p>상품설명 & 가격</p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="shoes"
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="상품3"
            />
            <div className="product-details">
              <h4>상품명</h4>
              <p>상품설명 & 가격</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
