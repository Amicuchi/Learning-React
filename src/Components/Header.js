import React from "react";
import Navigation from "./Navigation";

// Componente de cabeçalho que inclui o nome do aplicativo e a barra de navegação
function Header() {
    return(
        <>
            <p>App name</p>
            <Navigation />   {/* Inclui a barra de navegação */}
        </>
    );
};

export default Header;