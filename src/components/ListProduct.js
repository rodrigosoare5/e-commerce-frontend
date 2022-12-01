import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './ProductCard';
import { Container } from 'react-bootstrap';
const style = {
    marginTop: "2%",

}

function ProductList({products}) {
    return (    
        <Container style={style}>
            <Row xs={1} md={5} lg={7} className="justify-content-md-left">
              {products.map(product => (
                <Col key={product.id}>
                  <Product product={product}/>
                </Col>
              ))}
            </Row>
        </Container>
          );
  }
  
  export default ProductList;