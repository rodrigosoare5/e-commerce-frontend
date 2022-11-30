import Footer from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";
import Container from 'react-bootstrap/Container';
import ProductList from "../../components/ListProduct";
import useAxios from "../../utils/axios";
import { useState, useEffect } from "react";

function Home(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
      }, [])

      const getProducts = () => {
        useAxios
            .get('products/'     
            )
            .then((response) => {
                console.log(response)
                setProducts(response.data)

            })
      }
    return(
        <>  
            <Container fluid>
                <NavBarComponent search={true}/>
                <h1 className="display-3 text-center">Produtos</h1>
                <ProductList products={products} />
                <Footer/>
            </Container>
        </>
    );
}

export default Home;