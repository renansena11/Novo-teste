import React from "react";
import './resetsenha.css'
import {Link} from 'react-router-dom';


function ResetSenha() {
    return <div className="d-flex align-itens-center text-center form-container">

    <form className="form-signin"> {/*form-container e form-signin são meus estilos */}
        <img className="mb-4" src="/Images/logo-small.png" alt="" width="150" height="40"/>
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
            <label for="floatingInput">E-mail</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>
            <div className="login-links mt-3"> {/*mt-3 = margin-top = 3 */}
                {/*<a className="mx-3" href="/login">Já tenho uma conta</a> dessa forma faz com html, e a página recarrega, na forma
                la de baixo não recarrega*/}
                <Link to="/login"className="mx-3">Já tenho uma conta</Link>
                <Link to="/login/novaconta" className="mx-3">Criar uma conta</Link>

            </div>
        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Renan Sena</p>
    </form>


    </div>    
}

export default ResetSenha;