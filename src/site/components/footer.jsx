import React from "react";

function Footer() {
    
    var ano = new Date().getFullYear();

    return <section id="footer" >
        <div>

            <ul className="list-unstyled list-incline social text-center">
                <li className="list-incline-item"><a href="#"><i className="fa fa-facebook fa-2x"></i></a></li>
                <li className="list-incline-item"><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                <li className="list-incline-item"><a href="#"><i className="fa fa-instagram fa-2x"></i></a></li>
                <li className="list-incline-item"><a href="#" target="_blank"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
        </div>
        <a href="mailto:sena.projetos.execucoes@gmail.com">sena.projetos.execucoes@gmail.com</a>
        <p>Desenvolvido por Renan Sena</p>   
    </section>
}

export default Footer;