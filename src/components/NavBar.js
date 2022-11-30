import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaCartArrowDown} from  'react-icons/fa';

function NavBarComponent({search}) {
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
            <Nav.Link href="/orders">Histórico de compras</Nav.Link>
            <Nav.Link href="/cart">
              Carrinho
              <FaCartArrowDown/>
              </Nav.Link>
          </Nav>
          {search? 
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
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