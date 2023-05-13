import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Site from './site/site';
import Login from './site/Login/login';


function App() {
    return <BrowserRouter>
        <Routes>

            <Route exact path='/' element={<Site/>} />    
            <Route exact path='/login' element={<Login/>} />  

        </Routes> 
    </BrowserRouter>
    }
export default App;

/* Paginas 
import Site from './site/site.jsx';
import Login from './app/login.jsx';

function App(){
    return <BrowserRouter>
    <Route exact path='/' component={Site} />    
    <Route exact path='/app' component={Login} />    
    </BrowserRouter>;
  }

export default App;*/