
const style = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%"
}

function Footer(){
    return(
        <>
                <div class="mt-5 p-4 bg-dark text-white text-center" style={style}>
                    <p>E-commerce by Rodrigo, para fins de teste</p>
                </div>  
        </>
    );
}

export default Footer;