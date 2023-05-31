import React from "react";
import './home.css'
import Navbar from "../../components/Navbar/navbar";
import {Link} from 'react-router-dom';
import Table_Projetos from "./table_projetos";
import Grafico_Historico from "./grafico_historico";

function Home() {
    return <div>
        <Navbar></Navbar> {/*container-fluid é do bootstrap */}

        <div className="container-fluid titulo">

            <div className="row">

            <div className="col-lg-3 feature-box">
                
                <h1 className="mt-3 icon fas fa-thin fa-bolt fa-1x">  Projetos</h1>
                <Table_Projetos></Table_Projetos>
 
             </div>
            

            <div className="col-lg-3 feature-box">
                
                <i className="mt-3 icon fas fa-thin fa-layer-group fa-1x">  Todos os Dispositivos</i>
            
            </div>

            <div className="col-lg-3 feature-box">
                
            <i className="mt-3 icon fas fa-thin fa-check fa-1x">  Status</i>
            
            </div>

            <div className="col-lg-3 feature-box">
                
            <i className="mt-3 icon fas fa-thin fa-address-card fa-1x ">  Sobre</i>
            
            </div>

            </div>
            
        </div>
        <div className="historico feature-box">
            <i class="icon fas fa-thin fa-calendar-day fa-1x">  Histórico de Dados</i>
            <h1>aaaa</h1>
            <Grafico_Historico></Grafico_Historico>
        </div>
    </div>    
}

export default Home;