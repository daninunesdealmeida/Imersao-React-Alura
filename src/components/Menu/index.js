import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../componentes';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className= "LogoMain" src={logo} alt="LogoMain logo"/>
            </Link>
            <Button as ={Link} className="ButtonLink" to="cadastro/video">
                Novo Vídeo
            </Button>
        </nav>

    ); 
        
}

export default Menu; 