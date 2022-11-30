
function OrderItem({ order, index}) {

    return (
        <>

            <tr key={order.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                    <img src={order.product.image} style={{ width: '4rem' }} />
                </th>
                <td>{order.product.name}</td>
                <td>
                    {order.quantity}
                </td>
                <td>
                    {order.total_price}
                </td>
                <td>
                    {order.date}  
                </td>

                <td>
                    {order.status}
                </td >
            </tr >
        </>
    );
}

export default OrderItem;