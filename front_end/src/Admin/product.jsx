import image1 from "../images/i1.jpg"

const Product = () =>{

    

    return(
        <>
            <div className="background">
                <div>
                    <img src={image1} alt="" height='50px' width='50px' className="Image"/>
                </div>
                <div className="Name">
                        A Product name anemshshshajajajaaa
                </div>
                <div className="CustomerId">
                        constumer ID
                </div>
                <div className="price">
                    price
                </div>
            </div>
        </>
    )
}


export default Product