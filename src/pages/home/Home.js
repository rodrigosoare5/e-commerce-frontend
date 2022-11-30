import Footer from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";
import Container from 'react-bootstrap/Container';
import ProductList from "../../components/ListProduct";
import useAxios from "../../utils/axios";
import { useState, useEffect } from "react";

function Home({auth}){
    const [products, setProducts] = useState([]);

    const searchFunction = (name) =>{
        useAxios
            .get(`products/?search=${name}`)
            .then((response) =>{
                if (response.data.length == 0){
                    alert("Nenhum produto encontrado, tente outra coisa")
                }else{

                    setProducts(response.data)
                }
        })
    }

    useEffect(() => {
        document.title = "Home"
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
                <NavBarComponent search={true} auth={auth} searchFunction={searchFunction}/>
                <h1 className="display-3 text-center">Produtos</h1>
                <ProductList products={products} />
                <Footer/>
            </Container>
        </>
    );
}

export default Home;