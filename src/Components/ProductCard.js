import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

// Estilização do componente ProductCard usando styled-components
const ProductCardStyle = styled.div`
    width: 300px;
    border: 1px solid #3498db;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    align-items: center;
    text-align:center;
`;

const ProductCardImgStyled = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 10px;
`;

// Componente ProductCard que mostra os detalhes básicos de um produto
function ProductCard(props) {
    return(
        <ProductCardStyle> 
            <Link to={`/product/${props.product.id}`}>
                <ProductCardImgStyled src={props.product.images} alt={props.product.name} />
            </Link>
                <h3>{props.product.name}</h3> 
                <h4>$ {props.product.price}</h4>
                <p>{props.product.description}</p>
        </ProductCardStyle>
    )
}

export default ProductCard; 