import React, {useState} from "react";
import { useRoutes } from "react-router-dom"

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Signup from "./pages/signup/Signup";
import Orders from "./pages/orders/Orders";

import { RouterProtected } from "./components/RouterProtected";

function Routers() {

    const existToken = (token) => {
      return token ? true: false;
    }
  
    const isValid = existToken(localStorage.getItem("access_token"))
    const [auth, setAuth] = useState(isValid)

    const routes = useRoutes([
        {
          element: <RouterProtected auth={auth} />,
          children: [
            {
              path: "/cart",
              element: <Cart />,
            },
            {
              path: "/orders",
              element: <Orders/>,
            },
          ],
        },
        {
          path: "/login",
          element: <Login setAuth={setAuth} />,
        },
        {
          path: "/signup",
          element: <Signup setAuth={setAuth} />,
        },
        {
            path: "/",
            element: <Home />,
        },
      ])
  
      return routes
}

export default Routers;