import Table from 'react-bootstrap/Table';
import TableItem from './TableItem';

function TableProduct({products}) {
  return (
    <Table responsive>
      <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">ProductImage</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Remove</th>
            </tr>
      </thead>
      <tbody>
        <>
        {products.map((product, index)=>(
            <TableItem product={product} index={index} key={product.id} />
        ))
        }
        </>
      </tbody>
    </Table>
  );
}

export default TableProduct;