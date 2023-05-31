import React from "react";
import './home.css'


function Table_Projetos() {
    return <div>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Status</th>
                        <th scope="col">Criação</th>
                        <th scope="col">Ação</th>
                        
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
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