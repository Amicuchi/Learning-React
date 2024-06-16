import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Components/Loader";

function Product() {
    const { id } = useParams()
    const url = `https://666f2a3ef1e1da2be52227f8.mockapi.io/products/product/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });
    let content = null;

    useEffect( () => {
        setProduct({
            loading: true,
            data: null,
            error: false,
        });

        axios
            .get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch( () => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true
                })
            });
    }, [url]);

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