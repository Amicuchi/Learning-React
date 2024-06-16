import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
    return(
        <div className="productCard"> 
            <Link to={`/product/${props.product.id}`}>
                <img src={props.product.images} alt={props.product.name} />
            </Link>
                <h3>{props.product.name}</h3> 
                <h4>$ {props.product.price}</h4>
                <p>{props.product.description}</p>
        </div>
    )
}

export default ProductCard; 