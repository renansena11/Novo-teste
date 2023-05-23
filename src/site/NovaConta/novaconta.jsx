import React, { useState } from "react";
import './novaconta.css'
import {Link} from 'react-router-dom';
import '../Config/firebase'
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function NovaConta() {

    const [email, setEmail] = useState('');  // vamos usar a ideia do setState
    const [senha, setSenha] = useState(''); // set é a função que muda o estado de senha
    const [mensagem, setMensagem] = useState('');

    function cadastrarUsuario() {
        //vamos fazer uma validação antes de conectar com o firebase
        setMensagem(''); {/*!email = notemail ou não tem email */}
        if(!email || !senha){
            setMensagem('Informe todos os campos para continuar');
            return;
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert('Usuário criado com sucesso');
        // ...
        })
        .catch((error) => {
        if (error.message === 'Firebase: Error (auth/invalid-email).') {
            setMensagem('Email inválido');
        }
        else if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
            setMensagem('Usuário já exixtente');
        }
        else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            setMensagem('A senha deve possuir pelo menos 6 caracteres');
        }
        else{
            setMensagem('Erro ao criar conta' + error.message);
        }
        // ..
         });    

    }

    return <div className="d-flex align-itens-center text-center form-container">

    <form className="form-signin"> {/*form-container e form-signin são meus estilos */}
        <img className="mb-4" src="/Images/logo-small.png" alt="" width="150" height="40"/>
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>
        {/*<h1 className="h3 mb-3 fw-normal">{email} - {senha}</h1> {/*so pra ver se está funcionando */}

        <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/>
            {/*e = event */}
            <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
            <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label for="floatingPassword">Senha</label>
        </div>

        <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar Conta</button>
            <div className="login-links mt-3"> {/*mt-3 = margin-top = 3 */}
                {/*<a className="mx-3" href="/login">Já tenho uma conta</a> dessa forma faz com html, e a página recarrega, na forma
                la de baixo não recarrega*/}
                <Link to="/login"className="mx-3">Já tenho uma conta</Link>

            </div>
        {
            // operador ternário (tipo if-else):   se sucesso === 1 ? 'faça isso' : 'faça aquilo'
        mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null
        }
        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Renan Sena</p>
    </form>


    </div>    
}

export default NovaConta;