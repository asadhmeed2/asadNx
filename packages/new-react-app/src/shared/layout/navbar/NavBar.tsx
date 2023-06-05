import React from 'react'
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <Navbar bg="dark" expand={'sm'} className=" bg-black fixed-top">
          <Container fluid>
            <Navbar.Brand href="#" className='text-white'>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='text-white' id={`offcanvasNavbarLabel-expand`}>
                 Profile
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href="/" className='text-white'>Home</Nav.Link>
                  
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className='text-white'>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   )
}
