import { useState, useEffect } from "react";
import { getCart } from "../../utils/cart";
import NavBarComponent from "../../components/NavBar";
import TableProduct from "../../components/TableProduct";
import { Button, Form } from "react-bootstrap";
import useAxios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { removeItemFromCart } from "../../utils/cart";

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
  function handleSubmit(e) {
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
      })
  }
  useEffect(() => {
    document.title ="Carrinho"
    const car = getCart()
    setCart(car)
  }, [])
  return (

    <>
      <NavBarComponent search={false} auth={auth}/>
      <h1 className="display-3 text-center">Carrinho</h1>
      {cart.length <= 0 ?
         <>
        <h1 className="display-4 text-center">O carrinho está vázio</h1>
        <Footer/>
        </>
        : <>
          <TableProduct products={cart} handleDelete={handleDelete}/>
          <div className="row" style={{ marginTop: "5%" }}>
            <div className="col text-center">
              <h4>TOTAL da compra: R${total.toFixed(2)} </h4>
              <Form onSubmit={handleSubmit}>
                <Button type="submit">FINALIZAR COMPRA</Button>
              </Form>
            </div>

          </div>
          <Footer/>
        </>
      }
    </>
  );
}

export default Cart;