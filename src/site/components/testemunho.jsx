import React from "react";

//container mantem as margens
//row: deve-se criar as colunas sempre dentro de uma row
function Testemunho() {
    return <section id="testemunho" className="wrapper-bg-t">
        <div className="container">
           
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                    <img src="Images/Nerto.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h6>Excelente ferramenta para acompanhamento da minha usina solar.</h6>
                        <em>Neto Golçalves - Recife - PE.</em>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="Images/sulívia.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                    <h6>Ótimo recurso para acompanhar meus processos indústriais em qualquer lugar ou plataforma.</h6>
                    <em>Sulívia Muller - Juiz de Fora - MG.</em>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                <img src="Images/Herdes.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h6>Perfeito para a organização de minha casa, onde consigo realizar e acompanhar minha automação residencial em apenas um lugar.</h6>
                    <em>Herdes Virgoris - Porto Seguro - BA.</em>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>                 
        </div>
            
        
    </section>;   
}
  
export default Testemunho;