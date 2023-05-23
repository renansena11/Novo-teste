import React, { useState } from "react";
import './login.css'
import {Link} from 'react-router-dom';
import '../Config/firebase'
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Login() {

    const [email, setEmail] = useState('');  // vamos usar a ideia do setState
    const [senha, setSenha] = useState(''); // set é a função que muda o estado de senha
    const [sucesso, setSucesso] = useState('');

    //vamos criar uma função de autenticação para comunicar com o back-end(firebase)

    function LoginUsuario() {
        //alert('Realizando Login'); 
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            // Signed in
            //alert('Sucesso');
            const user = userCredential.user;
            // ...
            setSucesso('S');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //alert('Erro');
            setSucesso('N');
          });
               
    }

    //function alterarEmail(event) {
    //    setEmail(event.target.value); // estou pegando o evento onChange. target input e o valor é o que o usuário está digitando          
    //}

   // function alterarSenha(event) {
   //     setSenha(event.target.value);                 
   // }


    return <div className="d-flex align-itens-center text-center form-container wrapper-bg">

    <form className="form-signin"> {/*form-container e form-signin são meus estilos */}
        <img className="mb-4" src="/Images/logo-small.png" alt="" width="150" height="40"/>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        {/*<h1 className="h3 mb-3 fw-normal">{email} - {senha}</h1> {/*so pra ver se está funcionando */}

        <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail"/> {/*onChange = quando começo a digitar no campo de email vai para aquela função ali */}
            <label for="floatingInput">E-mail</label>
        </div>
        <div className="form-floating">
            <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha"/>
            <label for="floatingPassword">Senha</label>
        </div>

        <div className="checkbox mb-3">
         <label>
            <input type="checkbox" value="remember-me"/> Lembrar-me
         </label>
        </div>
        {/*<button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>*/} {/*mudei para comunicar */}
          <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Entrar</button> 
          {/*foi retirado o submit -> para a página não ficar carregando quando clicamos em entrar */}
          {/*onClick = Leva para a função de LoginUsuario para autenticar*/}
            
            {
                // operador ternário (tipo if-else):   se sucesso === 1 ? 'faça isso' : 'faça aquilo'
            sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert"> E-mail e Senha Inválidos</div> : null
            }
            <div className="login-links mt-3"> {/*mt-3 = margin-top = 3 */}
                {/*<a className="mx-3" href="#">Esqueci minha senha</a>
                <a className="mx-3" href="#">Criar uma conta</a>*/}
                <Link to="/login/resetsenha" className="mx-3">Esqueci minha senha</Link>
                <Link to="/login/novaconta" className="mx-3">Criar uma conta</Link>
                
            </div>
        <p className="mt-5 mb-3 text-body-secondary">&copy; Desenvolvido por Renan Sena</p>
        <a className="list-incline-item"><a href="https://github.com/renansena11" target="_blank"><i className="icon_login fa fa-github fa-2x"></i></a></a>
    </form>


    </div>    
}

export default Login;