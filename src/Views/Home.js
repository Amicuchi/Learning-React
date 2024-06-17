import React  from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HttpRequests";

function Home() {
    const url = `https://666f2a3ef1e1da2be52227f8.mockapi.io/products/product?page=1&limit=10`;
    let products = useAxiosGet(url);
    let content = null;

    if(products.error){
        content = <p>There was an error. Please, try again.</p>
    }

    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content = 
            products.data.map((product, key) => 
            <div key={key}>
                <ProductCard 
                    product={product}
                    />
            </div>
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