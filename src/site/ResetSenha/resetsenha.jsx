import React, { useState } from "react";
import './resetsenha.css'
import {Link} from 'react-router-dom';
import '../Config/firebase'
import 'firebase/auth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";



function ResetSenha() {

    const [email, setEmail] = useState('');  // vamos usar a ideia do setState
    const [mensagem, setMensagem] = useState('Teste de erro');

    function recuperarSenha() {
        //vamos pedir para o firebase para redefinir a senha

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then((resultado) => {
            // Password reset email sent!
            // ..
            setMensagem('');
            alert('Email enviado com sucesso');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setMensagem('Erro ao enviar email: ' + errorMessage);
        });

        

    }


    return <div className="d-flex align-itens-center text-center form-container wrapper-bg">

    <form className="form-signin"> {/*form-container e form-signin são meus estilos */}
        <img className="mb-4" src="/Images/logo-small.png" alt="" width="150" height="40"/>
        <h1 className="h3 mb-3 fw-normal">Recuperar Senha</h1>

        <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
            <label for="floatingInput">E-mail</label>
        </div>

        <button onClick={recuperarSenha} className="w-100 btn btn-lg btn-primary mt-3" type="button">Enviar</button>
            <div className="login-links mt-3"> {/*mt-3 = margin-top = 3 */}
                {/*<a className="mx-3" href="/login">Já tenho uma conta</a> dessa forma faz com html, e a página recarrega, na forma
                la de baixo não recarrega*/}
                <Link to="/login"className="mx-3">Já tenho uma conta</Link>
                <Link to="/login/novaconta" className="mx-3">Criar uma conta</Link>

            </div>
            {
            mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null
            }
        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Renan Sena</p>
        <a className="list-incline-item"><a href="https://github.com/renansena11" target="_blank"><i className="icon_reset fa fa-github fa-2x"></i></a></a>
    </form>


    </div>    
}

export default ResetSenha;