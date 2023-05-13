import React from "react";

//container mantem as margens
//row: deve-se criar as colunas sempre dentro de uma row
function Features() {
    return <section id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 feature-box"> {/*lg = desktoop md = tablet sm = celular || 4 pois vou dividir a tela em 3 partes */}
                    <i className="icon fas fa-heart fa-5x"></i> {/*icone de coração fa-5x escolhemos quantas vezes quero maior*/}

                    <h3>Fácil de usar</h3>
                    <p>O sistema possui uma interface muito simples e fácil de utilizar!</p>
                </div>

                <div className="col-lg-4 feature-box"> {/*2ª coluna */}
                    <i className="icon fas fa-globe-americas fa-5x"></i> {/*logo de globo*/}
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie e acompanhe em tempo real o seu fluxo de negócios de forma eficiente, onde quer que você esteja!</p>                       
                </div>

                <div className="col-lg-4 feature-box"> {/*2ª coluna */}
                    <i className="icon fas fa-columns fa-5x"></i> {/*logo de colunas*/}
                    <h3>Organização é tudo!</h3>
                    <p>Tenha seus projetos sempre muito bem organizados!</p>                       
                </div>
                
            </div>
        </div>
            
        
    </section>;   
}
  
export default Features;