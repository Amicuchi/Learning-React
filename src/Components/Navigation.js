import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Componente de navegação que inclui ícones e links para as páginas Home e About
function Navigation() {
    return(
        <>
            <p>Menu</p>

            <FontAwesomeIcon icon={faBars}/>    {/* Ícone do menu de navegação */}

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    );
};

export default Navigation;