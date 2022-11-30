import { FaPlusCircle, FaMinusCircle, FaTrashAlt } from 'react-icons/fa'
import { Button } from 'react-bootstrap';

function TableItem({ product, index, handleDelete}) {

    return (
        <>

            <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <th scope="row">
                    <img src={product.image} style={{ width: '4rem' }} />
                </th>
                <td>{product.name}</td>
                <td>
                    {product.price}
                </td>
                <td>
                    {product.description}
                </td>
                <td>
                    <Button><FaMinusCircle /></Button>
                    {product.quantity}
                    <Button><FaPlusCircle /></Button>
                </td>

                <td>
                    <Button onClick={()=> handleDelete(index)} variant="danger"><FaTrashAlt /></Button>
                </td >
            </tr >
        </>
    );
}

export default TableItem;