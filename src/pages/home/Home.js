import Footer from "../../components/Footer";
import NavBarComponent from "../../components/NavBar";
import Container from 'react-bootstrap/Container';
import ProductList from "../../components/ListProduct";

function Home(){
    return(
        <>  
            <Container fluid>
                <NavBarComponent/>
                <h1 className="display-3 text-center">Produtos</h1>
                <ProductList/>
                <Footer/>
            </Container>
        </>
    );
}

export default Home;