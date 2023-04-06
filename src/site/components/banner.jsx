import React from "react";


function Banner() {
    return <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6"> {/*lg = desktoop md = tablet sm = celular */}
                    <h1>Uma plataforma para acompanhar seus projetos e monitoramentos em tempo real</h1>
                    <h4>Gerencie em apenas um lugar</h4>
                    <button type="button" className="btn btn-dark btn-lg">Fazer Login</button>
                    <button type="button" className="btn btn-outline-light btn-lg">Criar uma Conta</button>
                </div>
                <div className="col-lg-6"> {/*Cirei um carrosel de imagens para apresentar os trabalhos */}
                                        
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                        <img src="Images/ca_1.jpg" className="d-block w-100" alt="..." height="400"/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="Images/ca_10.jpg" className="d-block w-100" alt="..." height="400"/>
                    </div>

                    <div class="carousel-item">
                        <img src="Images/ca_12.jpg" className="d-block w-100" alt="..." width= "30" height= '400'/>
                    </div> {/*tem que voltar aqui e estilizar essa imagem */}
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                 </button>
                
                </div>
            </div>
            </div>
        </div>
    </section>;   
}

export default Banner;