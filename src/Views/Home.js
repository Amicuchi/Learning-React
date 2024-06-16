import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../Components/Loader";

function Home() {
    const url = `https://666f2a3ef1e1da2be52227f8.mockapi.io/products/product?page=1&limit=10`;
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    });
    let content = null;

    useEffect( () => {
        setProducts({
            loading: true,
            data: null,
            error: false,
        });

        axios
            .get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch( () => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            });
    }, [url]);

    if(products.error){
        content = <p>There was an error. Please, try again.</p>
    }

    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content = 
            products.data.map((product, key) => 
                <> 
                    <h3>{product.name}</h3> 
                    <div>
                        <img src={product.images} alt={product.name} />
                    </div>
                    <h4>$ {product.price}</h4>
                    <p>{product.description}</p>
                </>
            )
    }

    return(
        <>
            <h1>Best Sellers</h1>

            {content}
        </>
    );
};

export default Home;