import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../componentes';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className= "LogoMain" src={logo} alt="LogoMain logo"/>
            </a>
            <Button as ="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>

    ); 
        
}

export default Menu; 