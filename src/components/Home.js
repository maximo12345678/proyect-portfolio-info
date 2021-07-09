import React from 'react'
import Proyects from './Proyects'

const Home = () => {
    return (
        <div style={{marginTop: "110px"}}>
            <div id="wrapper">
                <p id="stars"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></p>
                <p id="title" spellcheck="false"><span>P</span><span>O</span><span>R</span><span>T</span><span>F</span><span>O</span><span>L</span><span>I</span><span>O</span></p>  {/* SACO ESTE ATRIBUTO asi no se puede modificar. contenteditable="true" */}
                <p id="slogan"><span>Maximo</span><span>Yañez</span>.</p>
            </div>

            <div class="contenedor">
                <i className="textoHome">
                    En esta pagina vas a poder ver todos <i className="subrayadoTexto">mis proyectos</i>, 
                    conocer <i className="subrayadoTexto">sobre mi</i>, 
                    ver las <i className="subrayadoTexto">tecnologias</i> que mas utilizo, mi <i className="subrayadoTexto">formacion</i> academica
                    y mis medios de <i className="subrayadoTexto">contacto!</i>
                </i>
            </div>


            <Proyects></Proyects>

        </div>
    )
}


export default Home;