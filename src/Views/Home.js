import React  from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import useAxiosGet from "../Hooks/HttpRequests";

// Componente da página inicial que mostra os produtos mais vendidos
function Home() {
    // URL da API para buscar os produtos
    const url = `https://666f2a3ef1e1da2be52227f8.mockapi.io/products/product?page=1&limit=10`;

    // Hook customizado para fazer a requisição GET
    let products = useAxiosGet(url);
    let content = null;

    // Se ocorrer um erro na requisição, mostra uma mensagem de erro
    if(products.error){
        content = <p>There was an error. Please, try again.</p>
    }

    // Se os dados estão carregando, mostra o Loader
    if(products.loading){
        content = <Loader />
    }

    // Se os dados foram carregados com sucesso, mostra os cartões de produto
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

            {content}   {/* Exibe o conteúdo apropriado com base no estado da requisição */}
        </>
    );
};

export default Home;