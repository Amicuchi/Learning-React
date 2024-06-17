import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import useAxiosGet from "../Hooks/HttpRequests";

// Componente da página de detalhes de um produto específico
function Product() {
    const { id } = useParams()  // Obtém o ID do produto dos parâmetros da URL

     // URL da API para buscar os detalhes do produto
    const url = `https://666f2a3ef1e1da2be52227f8.mockapi.io/products/product/${id}`;

    // Hook customizado para fazer a requisição GET 
    let product = useAxiosGet(url);
    let content = null;

    // Se ocorrer um erro na requisição, mostra uma mensagem de erro
    if(product.error){
        content = <p>There was an error. Please, try again.</p>
    }

    // Se os dados estão carregando, mostra o Loader
    if(product.loading){
        content = <Loader />
    }

    // Se os dados foram carregados com sucesso, mostra os detalhes do produto
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
        <>{content}</>  // Exibe o conteúdo apropriado com base no estado da requisição
    );
};

export default Product;