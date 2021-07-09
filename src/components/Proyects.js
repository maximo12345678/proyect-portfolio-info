import React, { useEffect } from 'react'

import adminBiblioteca from '../images/admin-biblioteca.png'
import alumnoBiblioteca from '../images/alumno-biblioteca.png'
import profesorBiblioteca from '../images/profesor-biblioteca.png'

import homeEcommerce from '../images/home-ecommerce.png'
import loginEcommerce from  '../images/login-ecommerce.png'
import cartEcommerce from '../images/cart-ecommerce.png'


import CardProyect from './CardProyect'




const Proyects = () =>{


    return(
        <div className="contenedor">
            <span className="subTitulo">Proyects</span>

            <br></br>

            <div className="proyects"> {/* NINGUN TITULO IGUAL AL OTRO, POR TEMA DE SLIDERS */}
                <CardProyect 
                    descripcion="Pagina hecha en React, almacenando datos en firebase."    
                    titulo="Biblioteca Virtual" 
                    sitio="https://unruffled-brown-71b208.netlify.app/" 
                    image1={adminBiblioteca} 
                    image2={alumnoBiblioteca} 
                    image3={profesorBiblioteca}>
                </CardProyect>

                <hr className="divisor"></hr>

                <CardProyect 
                    descripcion="E-commerce creado en React y utilizando herramientas de 'material UI'."    
                    titulo="E-Commerce" 
                    sitio="https://naughty-mahavira-50c7d6.netlify.app/" 
                    image1={homeEcommerce} 
                    image2={cartEcommerce} 
                    image3={loginEcommerce}>
                </CardProyect>
            </div>

            <hr style={{marginTop: "50px"}}></hr>

            <div className="proyects">
                <CardProyect 
                    descripcion="Pagina hecha en React, almacenando datos en firebase."    
                    titulo="2yCalc Factory" 
                    sitio="https://modest-boyd-25cddd.netlify.app/" 
                    image1={adminBiblioteca} 
                    image2={alumnoBiblioteca} 
                    image3={profesorBiblioteca}>
                </CardProyect>

                <hr className="divisor"></hr>

                <CardProyect 
                    descripcion="E-commerce creado en React y utilizando herramientas de 'material UI'."    
                    titulo="Primera Red Neuronal" 
                    sitio="https://thirsty-northcutt-7ab989.netlify.app/" 
                    image1={homeEcommerce} 
                    image2={cartEcommerce} 
                    image3={loginEcommerce}>
                </CardProyect>
            </div>





        </div>
    )
}


export default Proyects;