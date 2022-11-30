import Table from 'react-bootstrap/Table';
import OrderItem from './OrderItem';

function OrderTable({orders}) {
  return (
    <Table responsive>
      <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">ProductImage</th>
              <th scope="col">Name</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Preço total</th>
              <th scope="col">Data do pedido</th>
              <th scope="col">Status</th>
            </tr>
      </thead>
      <tbody>
        <>
        {orders.map((order, index)=>(
            <OrderItem order={order} index={index} key={order.id} />
        ))
        }
        </>
      </tbody>
    </Table>
  );
}

export default OrderTable;