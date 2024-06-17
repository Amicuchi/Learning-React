// Esse componente serve apenas para mostrar ao usuário que a requisição dele foi realizada e que será atendida.
// Por mera conveniência, o componente foi configurado visualmente aqui mesmo, mas poderia ter sido feito num arquivo separado.

import React from "react";
import styled from 'styled-components'

const LoaderDevice = styled.div`
    border: 5px solid #d1d1d1;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
`;

function Loader() {
    return(
        <>
            {/* <div className="loader"></div> */}
            <LoaderDevice />
        </>
    );
};

export default Loader;