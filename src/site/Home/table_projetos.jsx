import React from "react";
import './home.css'
import '../Config/firebase'
import { useState, useEffect } from "react";
import firebase from "../Config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";



function Table_Projetos() {

    const [projetos, setProjetos] = useState([]);  
    let listaPro = [];
/*
    useEffect(function(){
        firebase.firestore().collection('projetos').get().then(async function(resultado){
          await resultado.docs.forEach(function(doc){
            console.log(doc.id);
          })  

          setProjetos(listaPro);
        })
    }, []) // Executa essa função, sempre que os valores dentro dos [] forem alterados
    // async e o await function espera a função terminar de ser executada para ir para outro processo
*/
    return <div>
                <table className="table table-hover table-bordered ">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Status</th>
                        <th scope="col">Criação</th>
                        <th scope="col">Ação</th>
                        
                        </tr>
                    </thead>
                    <tbody className="table-group-divider table-light">
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Ottoaa</td>
                        <td>Otto</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="0">Larry</td>
                        <td>@twitter</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        </tr>
                    </tbody>  
                </table>    
                    
             </div>

}

export default Table_Projetos;