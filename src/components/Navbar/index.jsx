import React, { useState } from 'react'

import './style.css'
import MobileNav from './MobileNav'
import curriculo from '../../curriculo.pdf'


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => setOpenMenu(!openMenu)
    

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav__container">
                <div className="nav__content">
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

                    <button className="menu__btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">
                            {openMenu ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar