import Footer from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";
import Container from 'react-bootstrap/Container';
import OrderTable from "../../components/OrderTable";
import useAxios from "../../utils/axios";
import { useState, useEffect } from "react";

function Orders({auth}){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        document.title ="Histórico"
        getProducts()
      }, [])

      const getProducts = () => {
        useAxios
            .get('orders/'     
            )
            .then((response) => {
                console.log(response)
                setOrders(response.data)

            })
      }
    return(
        <>  
            <Container fluid >
                <NavBarComponent search={false} auth={auth} />
                <h1 className="display-3 text-center">Histórico de compras</h1>
                {orders.length>0?<OrderTable orders={orders}/>: <h1 className="display-4 text-center">Não possui pedidos ainda!</h1>}
                 
                <Footer/>
            </Container>
        </>
    );
}

export default Orders;