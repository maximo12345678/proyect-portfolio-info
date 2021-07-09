import React from 'react'
import './styles.css'
import {Link} from 'react-router-dom'

import logo from '../images/logo.png'

const NavBar = () =>{

    const eventoMenu = () =>{
        document.querySelector('.navegador-menu').classList.toggle('show'); //toggle, hace aparecer a SHOW si no esta, y lo desaparece si esta
        document.querySelector('.botonMenu').classList.toggle('clik'); //toggle, hace aparecer a SHOW si no esta, y lo desaparece si esta
    }


    return(
        <div className="navegador">
            
            {/* <a href="/proyects"><img className="nav-logo" src={logo}></img></a> */}
            <ul className="navegador-menu">
                
                <li><Link to="/"><i class="fas fa-home"></i></Link></li>
                <li><a><Link to="/proyects">Proyects</Link></a></li>
                <li><Link to="/aboutMe">About Me</Link></li>
                <li><Link to="/tecnologies">Tecnologies</Link></li>
                <li><Link to="/academicTraining">Academic Training</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>

            <div className="botonMenu">
                <i onClick={eventoMenu} className="fas fa-bars fa-2x"></i> {/* class="fas fa-bars fa-2x"fas fa-align-justify */}
            </div>

        </div>
    )
}


export default NavBar;