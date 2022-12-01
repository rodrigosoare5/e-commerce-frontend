
const style = {
    position: "relative",
    bottom: 0,
    width: "100%"
}

function Footer(){
    return(
        <>
                <div className="mt-5 p-4 bg-dark text-white text-center" style={style}>
                    <p>E-commerce by Rodrigo, para fins de teste</p>
                </div>  
        </>
    );
}

export default Footer;