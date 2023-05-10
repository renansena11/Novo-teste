import React from "react";

//container mantem as margens
//row: deve-se criar as colunas sempre dentro de uma row
function Precos() {
    return <section id="preco">
        <div className="container">
            <div className="row text-center"> {/*text-center é uma clss do bootstrap */}
                <div className="titulo">
                    <h1>Planos e Preços</h1>
                    <p>Comece sua avaliação gratuita. Não é necessário cartão de crédito</p>
                </div>
            </div> 

            <div className="row text-center">
                <div className="col-lg-4"> {/*lg = desktoop md = tablet sm = celular || 4 pois vou dividir a tela em 3 partes */}
                    <div className="card">
                        <div className="card-header"><h1>Free</h1></div>
                        <div className="card-body">
                            <h2>R$0,00</h2>    
                            <p>30 dias gratuitos.</p>
                            <p>Sem suporte</p>
                            <button className="btn btn-lg btn-outline-primary">Começar Agora</button>
                        </div>
                    </div>
                </div>  

                <div className="col-lg-4"> {/*lg = desktoop md = tablet sm = celular || 4 pois vou dividir a tela em 3 partes */}
                    <div className="card">
                        <div className="card-header"><h1>Pro</h1></div>
                        <div className="card-body">
                            <h2>R$49,90<small className="text-muted"> /mês</small></h2>    
                            <p>Monitoramento e planilha organizacional.</p>
                            <p>Suporte em horário comercial</p>
                            <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                        </div>
                    </div>
                </div>  

                <div className="col-lg-4"> {/*lg = desktoop md = tablet sm = celular || 4 pois vou dividir a tela em 3 partes */}
                    <div className="card">
                        <div className="card-header"><h1>Premium</h1></div>
                        <div className="card-body">
                            <h2>R$99,90<small className="text-muted"> /mês</small></h2>    
                            <p>Todos os recursos.</p>
                            <p>Suporte 24horas</p>
                            <button className="btn btn-lg btn-outline-primary">Assinar Agora</button>
                        </div>
                    </div>
                </div>  
            </div>

        </div>
    </section>;   
}
  
export default Precos;