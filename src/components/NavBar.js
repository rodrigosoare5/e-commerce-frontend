import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

import { FaCartArrowDown } from 'react-icons/fa';

function NavBarComponent({ search, auth, searchFunction }) {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value
    searchFunction(name)
  }
  function logout() {
    localStorage.removeItem("access_token")
    navigate('/')
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {auth ? <Nav.Link href="/orders">Histórico de compras</Nav.Link> : <></>}
            <Nav.Link href="/cart">
              Carrinho
              <FaCartArrowDown />
            </Nav.Link>
            {!auth ? <Nav.Link href="/login">Login</Nav.Link> : <></>}
            {auth ? <Nav.Link href="/" onClick={() => logout()}>Logout</Nav.Link> : <></>}
          </Nav>
          {search ?

            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button type='submit' variant="outline-success">Search</Button>
            </Form>
            :
            <></>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;