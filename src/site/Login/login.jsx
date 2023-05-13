import React from "react";
import './login.css'


function Login() {
    return <div className="d-flex align-itens-center text-center form-container">

    <form className="form-signin"> {/*form-container e form-signin são meus estilos */}
        <img className="mb-4" src="/Images/logo-small.png" alt="" width="150" height="40"/>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
            <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label for="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
         <label>
            <input type="checkbox" value="remember-me"/> Lembrar-me
         </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
            <div className="login-links mt-3"> {/*mt-3 = margin-top = 3 */}
                <a className="mx-3" href="#">Esqueci minha senha</a>
                <a className="mx-3" href="#">Criar uma conta</a>
            </div>
        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Renan Sena</p>
    </form>


    </div>    
}

export default Login;