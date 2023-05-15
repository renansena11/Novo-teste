import React from 'react';

// Aqui está minha navbar estiliza no bootstrap


function Menu(){ {/*fix-top a navbar fica fixa no topo */}
    return <nav className="navbar fix-top navbar-expand-md navbar-dark">

    <div className="container-fluid"> {/*o container centraliza e o fluid usa a tela toda*/}
            
        <a className="navbar-brand" href="#"> {/*como é js trocar class -> className */}
          <img src="Images/logo sena.png" alt="" height="28" /> {/*lembrand que tem que fechar a tag */}
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#banner">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#testemunho">Clientes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#preco">Planos e Preços</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#footer">Contato</a>
            </li>            
          </ul>


        </div>    
        <form className="d-flex collapse navbar-collapse navbar-nav ms-auto nav-item nav-link" role="search">
            <input className="form-control me-2" type="search" placeholder="O que você procura?" aria-label="Search" />
            <button className="btn-seach btn btn-light " type="submit"> Pesquisar </button>
        </form>
      
    </div>
  </nav>;
  }

export default Menu;