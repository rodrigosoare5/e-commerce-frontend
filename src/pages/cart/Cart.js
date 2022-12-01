import { useState, useEffect } from "react";
import { getCart } from "../../utils/cart";
import NavBarComponent from "../../components/NavBar";
import Container from 'react-bootstrap/Container';
import { Button, Form } from "react-bootstrap";
import TableProduct from "../../components/TableProduct";
import useAxios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { FaTrashAlt } from 'react-icons/fa'

import { removeItemFromCart, increaseQuantity, decreaseQuantity, dumpCart } from "../../utils/cart";

function Cart({auth}) {
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  const car = getCart();
  let total = 0;
  car.forEach((item) => {
    total += item.quantity * item.price;
  });

  const handleDelete = (itemIndex) => {
    const cartAfterRemoval = removeItemFromCart(itemIndex)
    setCart(cartAfterRemoval)
  }
  const handleDumpCart = () => {
    dumpCart()
    setCart([])
  }

  const handleIncrease = (id) => {
    const cartAfterRemoval = increaseQuantity(id)
    setCart(cartAfterRemoval)
  }
  const handleDecrease = (id) => {
    const cartAfterRemoval = decreaseQuantity(id)
    setCart(cartAfterRemoval)
  }

  function handleSubmit(e) {
    if(auth){
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart"));
    const products = cart.map(({ id, quantity }) => {
      return {
        product: id,
        quantity: parseInt(quantity),
      };
    });
    useAxios
      .post('orders/',
        JSON.stringify(products)
      )
      .then((response) => {
        localStorage.removeItem('cart')
        navigate('/')
      })}
      else{
        alert("precisa estar logado, você será redirecionado");
        navigate('/login')
      }
  }
  useEffect(() => {
    document.title ="Carrinho"
    const car = getCart()
    setCart(car)
  }, [])
  return (

    <>
    <Container fluid>
      <NavBarComponent search={false} auth={auth}/>
      <h1 className="display-3 text-center">Carrinho</h1>
      {cart.length <= 0 ?
         <>
        <h1 className="display-4 text-center">O carrinho está vázio</h1>
        <Footer/>
        </>
        : <>
          <TableProduct products={cart} 
          handleDelete={handleDelete} 
          handleIncrease={handleIncrease}
          handleDecrease ={handleDecrease} 
          />
          <div className="row" style={{ marginTop: "2%" }}>
            <div className="col text-center" style={{paddingLeft:"30%"}}>
              <h4>TOTAL da compra: R${total.toFixed(2)} </h4>
              <Form onSubmit={handleSubmit}>
                <Button type="submit">FINALIZAR COMPRA</Button>
              </Form>
            </div>
            <div className="col text-center" style={{marginRight:"-10%"}}>
              <Button onClick={()=> handleDumpCart()} variant="secondary">CLEAR<FaTrashAlt /></Button>
            </div>

          </div>
          <Footer/>
        </>
      }
      </Container>
    </>
  );
}

export default Cart;