import Card from 'react-bootstrap/Card';

function Product({image, name, description,  id}) {
  return (
    <>
          <Card>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                      {description}
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
          </Card>
    </>
  );
}

export default Product;