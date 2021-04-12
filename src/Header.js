import React from 'react'
import './App.css'
import Iconepontilhado from './imagens/Iconepontilhado.png'
import iconet from './imagens/iconet.png'

function Header(){
    return(
        <div>
            <header className = "menu">
                <ul>
                    <li><a href="#"><img className="iconet" src={iconet} alt="Icone T"/></a></li>
                    <li><a href="#"><img className="iconepontilhado" src={Iconepontilhado} alt="Icone Pontilhado"/></a></li>
                    <li><a href="#"> Imagens</a></li>
                    <li><a href="#">Gmail</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;

