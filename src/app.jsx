import React from 'react';
//import {BrowserRouter, Route} from 'react-router-dom';
import Site from './site/site';

function App() {
    return <div>
        <Site/>
        <h1>Site... 123</h1>
    </div>;    
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