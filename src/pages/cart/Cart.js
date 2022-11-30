import { useState, useEffect } from "react";
import { getCart } from "../../utils/cart";
import NavBarComponent from "../../components/NavBar";
import TableProduct from "../../components/TableProduct";

function Cart() {
  const [cart, setCart] = useState([])
  const car = JSON.parse(localStorage.getItem("cart"));
  let total = 0;
  car.forEach((item) => {
    total += item.quantity * item.price;
  });
  useEffect(() => {
    const car = getCart()
    console.log(car)
    setCart(car)
  }, [])
  return (

    <>
      <NavBarComponent />
      <h1 className="display-3 text-center">Carrinho</h1>
      <TableProduct products={cart} />
      <div className="row">
        <div className="col text-center">
          <h4>TOTAL: R${total.toFixed(2)}</h4>
        </div>
      </div>
    </>
  );
}

export default Cart;