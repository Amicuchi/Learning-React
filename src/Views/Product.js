import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequests";

function Product() {
    const { id } = useParams()
    const url = `https://666f2a3ef1e1da2be52227f8.mockapi.io/products/product/${id}`;
    let product = useAxiosGet(url);
    let content = null;

    if(product.error){
        content = <p>There was an error. Please, try again.</p>
    }

    if(product.loading){
        content = <Loader />
    }

    if(product.data){
        content = 
            <> 
                <h1>{product.data.name}</h1> 
                <div>
                    <img src={product.data.images} alt={product.data.name} />
                </div>
                <h3>$ {product.data.price}</h3>
                <p>{product.data.description}</p>
            </>;
    }

    return (
        <>{content}</>
    );
};

export default Product;