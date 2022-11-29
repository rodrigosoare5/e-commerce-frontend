  export const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (!cart) {
      localStorage.setItem('cart', [])
      return []
    }
    const parsedCart = JSON.parse(cart)
    return parsedCart
  }
  
  export const setCart = (cartContent) => localStorage.setItem('cart', JSON.stringify(cartContent))
  
  export const addItemToCart = (item) => {
    const cart = getCart()
    cart.push(item)
    setCart(cart)
  }
  
  export const removeItemFromCart = (itemIndex) => {
    const cart = getCart()
    cart.splice(itemIndex, 1)
    setCart(cart)
    return cart
  }
  
  export const dumpCart = () => localStorage.setItem('cart', [])

  export function handleClick(produto) {
    let cart = [];
    produto.quantidade = 1;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    if (cart.length > 0) {
      let entra = true;
      cart.forEach((item) => {
        if (item.id === produto.id) {
          item.quantidade += produto.quantidade;
          entra = false;
        }
      });

      if (entra) cart.push(produto);
    } else {
      console.log("carrinho vazio");
      cart.push(produto);
    }

    alert("Produto adicionado ao carrinho");
    localStorage.setItem("cart", JSON.stringify(cart));
  }