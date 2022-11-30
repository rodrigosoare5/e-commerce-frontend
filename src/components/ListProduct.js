import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Product from './ProductCard';
import { Container } from 'react-bootstrap';
import {data} from '../pages/cart/data'

const style = {
    marginTop: "2%",

}

function ProductList() {
    return (    
        <Container style={style}>
            <Row xs={1} md={6} className="justify-content-md-left">
              {data.map(product => (
                <Col key={product.id}>
                  <Product product={product}/>
                </Col>
              ))}
            </Row>
        </Container>
          );
  }
  
  export default ProductList;