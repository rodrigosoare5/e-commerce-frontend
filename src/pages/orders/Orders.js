import Footer from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";
import Container from 'react-bootstrap/Container';
import OrderTable from "../../components/OrderTable";
import useAxios from "../../utils/axios";
import { useState, useEffect } from "react";

function Orders(){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
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
                <NavBarComponent search={false}/>
                <h1 className="display-3 text-center">Histórico de pedidos</h1>
                <OrderTable orders={orders} />
                <Footer/>
            </Container>
        </>
    );
}

export default Orders;