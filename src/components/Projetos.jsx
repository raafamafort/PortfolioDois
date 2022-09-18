import styled from "styled-components"
import Codify from "../img/projetos/C-Logo.png"
import Java from "../img/tech/java.png"
import React from "../img/tech/react.png"
import HTML from "../img/tech/html.png"
import CSS from "../img/tech/css.png"
import PT from "../img/projetos/PT-Logo.png"
import DevLogo from "../img/projetos/DevRafael.png"

const SProjetos = styled.div`

     .container{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 4rem;
        width: 100%;
        min-height: 65vh;
        max-height: 65vh;
        background-color: #121212;
    }

    /* Projeto Pagina */

    .cards-projetos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 4vw;
    }

    .card-projeto{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 2.5rem;
        transition: 0.4s;
        width: 15vw;
        height: 35vh;
        border-radius: 0.5rem;
        text-decoration: none;
    }

    .imagem-projeto{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15vw;
        height: 25vh;
        background-color: #E5E5E5;
        border-radius: 0.5rem 0.5rem 0rem 0rem ;
        box-shadow: 1px 1px 10px rgb(0 0 0 / 50%);
        transition: 0.6s;
    }

    .legenda-projeto{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 15vw;
        height: 10vh;
        border-radius: 0rem 0rem 0.5rem 0.5rem;
        background-color: rgb(26, 26, 26);
        box-shadow: 1px 1px 10px rgb(0 0 0 / 50%);
        color: #E5E5E5;
        gap: 3vw;
        transition: 0.6s;
    }

    .tech-projetos{
        display: flex;
        align-items: center;
        gap: 0.5vw;

    }

    .titulo-projeto h2{
        font-size: 3vh;
    }

    .imagem-projeto img{
        position: absolute;
        max-height: 20%;
        max-width: 9%;
    }
    .logo-tech{
        display: flex;

        img{
            max-height: 5vh;
            max-width: 100%;
        }
    }

    .pt{
        
        h2{
            font-size: 2vh;
        }

        gap: 1vw;
    }

    .pt-img{
        background-color: #292936;
    }
    
    .dev-img{
        background-color: #FFC303;
    }
    
    .card-projeto:hover{
        padding-bottom: 2vh;
        
        .legenda-projeto{
            box-shadow: 1px 1px 20px black;
        }

        .imagem-projeto{
            box-shadow: 1px 1px 20px black;
        }
    }

    /* RESPONSIVE */

    @media(max-height: 600px){
        .container{
            min-height: 20vh;
            max-height: 20vh;
        }
    }

    @media(max-height: 670px){
        .container{
            min-height: 78vh;
            max-height: 78vh;
        }
    }
    
    @media(max-height: 800px){
        .container{
            min-height: 70vh;
            max-height: 70vh;
        }
    }

    @media(max-height: 915px){
        .container{
            min-height: 80vh;
            max-height: 80vh;
        }
    }

    @media(max-height: 1370px){
        .container{
            min-height: 80vh;
            max-height: 80vh;
        }
    }

    @media(max-height: 1980px){
        .container{
            min-height: 68vh;
            max-height: 68vh;
        }
    }

`
        
export default function Projetos(){

    return(
        <SProjetos>
            <div class="container">
            <div className="container-projetos">
                    <div class="cards-projetos">
                            <a class="card-projeto" href="https://codifyy.tech/" target="_blank">
                                <div className="imagem-projeto">
                                    <img src={Codify} alt="codify" />
                                </div>
                                <div className="legenda-projeto">
                                    <div className="titulo-projeto">
                                        <h2>Codify.</h2>
                                    </div>
                                    <div className="tech-projetos">
                                        <div className="logo-tech"><img src={React} alt="React" /></div>
                                        <div className="logo-tech"><img src={Java} alt="Java" /></div>
                                    </div>
                                </div>
                            </a>
                            <a class="card-projeto" target="_blank">
                                <div className="imagem-projeto pt-img">
                                    <img src={PT} alt="template portfolio" />
                                </div>
                                <div className="legenda-projeto pt">
                                    <div className="titulo-projeto pt">
                                        <h2>Portfólio Template</h2>
                                    </div>
                                    <div className="tech-projetos">
                                        <div className="logo-tech"><img src={HTML} alt="React" /></div>
                                        <div className="logo-tech"><img src={CSS} alt="Java" /></div>
                                    </div>
                                </div>
                            </a>
                            <a class="card-projeto" target="_blank">
                                <div className="imagem-projeto dev-img">
                                    <img src={DevLogo} alt="codify" />
                                </div>
                                <div className="legenda-projeto">
                                    <div className="titulo-projeto">
                                        <h2>Dev Rafael</h2>
                                    </div>
                                    <div className="tech-projetos">
                                        <div className="logo-tech"><img src={React} alt="React" /></div>
                                    </div>
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        </SProjetos>
    )
}