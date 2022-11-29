import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './Product';
import { Container } from 'react-bootstrap';

const style = {
    "margin-top": "5%",

}

function ProductList() {
    return (    
        <Container style={style}>
            <Row xs={1} md={6} className="justify-content-md-left">
              {Array.from({ length: 10 }).map((_, idx) => (
                <Col>
                  <Product name = "Bolacha" image="image" id={1} description="muito boa siero jkfjkjlkdjflkjd"/>
                </Col>
              ))}
            </Row>
        </Container>
          );
  }
  
  export default ProductList;