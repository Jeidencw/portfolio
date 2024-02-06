import React from 'react'

import './style.css'
import curriculo from '../../../curriculo.pdf'

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`mobile__menu ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
        >
            <nav className="mobile__menu__container">
                <a className='logo' href="#home">Logo</a>

                <ul>
                    <li><a href="#home" className='menu__item'>Início</a></li>
                    <li><a href="#about" className='menu__item'>Sobre</a></li>
                    <li><a href="#projects" className='menu__item'>Projetos</a></li>
                    <li><a href="#contact" className='menu__item'>Contato</a></li>

                    
                    <a href='../../curriculo.pdf' download={curriculo}>
                        <button className="curriculo__btn">Download Curriculo</button>
                    </a>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNav