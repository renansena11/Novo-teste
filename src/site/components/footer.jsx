import React from "react";

function Footer() {
    
    var ano = new Date().getFullYear();

    return <section id="footer" >
        <div>

            <ul className="inline-block list-unstyled list-incline social text-center">
                <a className="mx-5" href="https://www.facebook.com/senaprojetoseexecucoes" target="_blank"><i className="icon_footer fa fa-facebook fa-2x"></i></a>
                <a className="mx-5" href="https://wa.me/5532984802379?text=Ol%C3%A1%2C+tudo+bem%3F+gostaria+de+saber+mais+sobre+a+plataforma+de+gerenciamento de projetos." target="_blank"><i className="icon_footer fa fa-whatsapp fa-2x"></i></a>
                <a className="mx-5" href="https://www.instagram.com/senaeletrica/" target="_blank"><i className="icon_footer fa fa-instagram fa-2x"></i></a>
                <a className="mx-5" href="mailto:sena.projetos.execucoes@gmail.com" target="_blank"><i className="icon_footer fa fa-envelope fa-2x"></i></a>
                {/*target="_blank" é para abrir numa aba nova*/}
            </ul>
        </div>
        {/*<a href="mailto:sena.projetos.execucoes@gmail.com">sena.projetos.execucoes@gmail.com</a>*/}
        <p>Desenvolvido por Renan Sena</p>   
        <a className="list-incline-item"><a href="https://github.com/renansena11" target="_blank"><i className="icon_footer fa fa-github fa-2x"></i></a></a>
    </section>
}

export default Footer;