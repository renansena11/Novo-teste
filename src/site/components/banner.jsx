import React from "react";


function Banner() {
    return <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center"> {/*lg = desktoop md = tablet sm = celular */}
                    <h1>Uma plataforma para gerenciar e monitorar seus projetos em tempo real !</h1>
                    <i class="icon-banner fas fa-layer-group fa-5x"></i> {/*logo de globo*/}
                    <h4>Gerencie em apenas um lugar</h4>
                    <a href="/login" className="btn btn-outline-dark btn-lg btn-banner">Fazer Login</a>
                    <a href="#" className="btn btn-outline-info btn-lg btn-banner">Criar uma Conta</a>
                </div>
                <div className="col-lg-6"> {/*Cirei um carrosel de imagens para apresentar os trabalhos */}
                                        
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                        <img src="Images/ca_1.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="Images/ca_10.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src="Images/ca_12.1.jpg" className="d-block w-100" alt="..."/>
                    </div> {/*tem que voltar aqui e estilizar essa imagem */}
                    
                    <div class="carousel-item">
                        <img src="Images/ca_7.1.jpg" className="d-block w-100" alt="..."/>
                    </div> 

                    <div class="carousel-item">
                        <img src="Images/ca_9.jpg" className="d-block w-100" alt="..."/>
                    </div> 

                    <div class="carousel-item">
                        <img src="Images/ca_5.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item">
                        <img src="Images/ca_3.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    
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