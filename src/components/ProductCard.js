import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import {FaCartPlus} from  'react-icons/fa';
import { handleClick } from '../utils/cart';

const style ={
  marginTop: "2%",
  marginBottom: "2%",
  width: "60%",
  marginLeft: "20%"
}
function Product({product}) {
  return (
    <>
          <Card >
              <Card.Img variant="top" src={product.image} style={{ maxHeight: "100px" }}/>
              <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                      {product.description}
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <small className="text-muted">R$ {product.price}</small>
              </Card.Footer>
          </Card>
              <Button variant="primary" size="md" style={style} onClick={(() => handleClick(product))}>
                <span style={{marginRight: "10%"}}>Add</span>
                <FaCartPlus/>
              </Button>
    </>
  );
}

export default Product;