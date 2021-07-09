import React from 'react'

const CardProyect = (props) => {

// {lib.titulo.split(" ").join("_")}

    return (
        <div>

            <div className="cardProyect">
                <i  id={`${props.titulo.split(" ").join("_")}2`} className="tituloProyect">{props.titulo}</i>

                <ul className="slider">{/*cuando dejaste en la imagen 2 de una tarjeta y te vas a mover de otra tarjeta, esta se reinicia a la primera*/}
                    <li style={{paddingBottom: "10px"}} id={`${props.titulo.split(" ").join("_")}1`}>
                        <img src={props.image1}/>
                    </li>
                    <li>
                        <img src={props.image2} />
                    </li>
                    <li id={`${props.titulo.split(" ").join("_")}3`}>
                        <img src={props.image3} />
                    </li>
                </ul>

                <ul className="menu">
                    <li>
                        <a href={`#${props.titulo.split(" ").join("_")}1`}>1</a>
                    </li>
                    <li>
                        <a href={`#${props.titulo.split(" ").join("_")}2`}>2</a>
                    </li>
                    <li>
                        <a href={`#${props.titulo.split(" ").join("_")}3`}>3</a>
                    </li>
                </ul>

                <p className="descripcionProyect">{props.descripcion}</p>

                <i className="verSitioProyect"><a target="_blank" href={props.sitio}>Ver sitio </a></i>
            </div>


        </div>
    )
}

export default CardProyect;