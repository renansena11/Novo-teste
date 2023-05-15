import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Site from './site/site';
import Login from './site/Login/login';
import NovaConta from './site/NovaConta/novaconta';
import ResetSenha from './site/ResetSenha/resetsenha';
import Home from './site/Home/home';
import NovoProjeto from './site/Novoprojeto/novoprojeto';


function App() {
    return <BrowserRouter>
        <Routes>

            <Route exact path='/' element={<Site/>} />    
            <Route exact path='/login' element={<Login/>} />  
            <Route exact path='/login/novaconta' element={<NovaConta/>} /> 
            <Route exact path='/login/resetsenha' element={<ResetSenha/>} /> 
            <Route exact path='/login/home' element={<Home/>} /> 
            <Route exact path='/login/home/novoprojeto' element={<NovoProjeto/>} /> 
            

        </Routes> 
    </BrowserRouter>
    }
export default App;

/* Paginas 
import Site from './site/site.jsx';
import Login from './app/login.jsx';

Na versão antiga era assim

function App(){
    return <BrowserRouter>
    <Route exact path='/' component={Site} />    
    <Route exact path='/app' component={Login} />    
    </BrowserRouter>;
  }

export default App;*/