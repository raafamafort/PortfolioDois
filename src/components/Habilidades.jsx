import styled from "styled-components"
import Python from "../img/tech/python.png"
import JS from "../img/tech/js.png"
import React from "../img/tech/react.png"
import Java from "../img/tech/java.png"
import CSS from "../img/tech/css.png"
import HTML from "../img/tech/html.png"




const SHabilidades = styled.div`
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

    /* Titulo da pagina */
    .caixa-titulo{
        display: flex;
        align-items: center;
        gap: 0.5vw;
        margin: 1vw 3vw;
    }

    .titulo-container{
        text-align: center;
        color: #E6E6E6;
        font-size: 2.2rem;
        text-shadow: 1px 1px 5px rgb(0 0 0 / 50%);
        gap: 4vw;
    }

    .bola {
        border-radius: 50%;
        display: inline-block;
        height: 1rem;
        width: 1rem;
        background-color: #FFC303;
        box-shadow: 1px 1px 5px rgb(0 0 0 / 25%)
    }

    /* Habilidades Pagina */

    .cards-habilidade{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2vw;
    }

    .card-tech{
        display: flex;
        background-color: rgb(26, 26, 26);
        padding: 3rem 0rem;
        justify-content: space-around;
        align-items: center;
        border-radius: 2.5rem;
        box-shadow: rgb(0 0 0 / 5%) 1px 1px 10px;
        transition: 0.4s;
        width: 20vw;
        height: 7vh;
        border-radius: 0.4rem;
        border-left: 0.4rem solid #F8F8F2;
    }

    .card-tres{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4vw;
    }

    .card-tech img{width: 30%;}

    .legenda-tech{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20vw;
        height: 7vh;
        border-radius: 0rem 0.4rem 0.4rem 0rem;
        padding: 3rem 0rem;
        transition: 0.6s;
        color: transparent;
    }

    .legenda-tech p{
        text-shadow: none;
    }

    .card-tech:hover{
        .legenda-tech{
            width: 20vw;
            height: 7vh;
            color: #121212;
            font-weight: bold;
            background-color: #FFC303;
            font-size: 3vh;   
        }

        .legenda-tech p{
            text-shadow: 1px 1px 5px black;
        }

        transform: scale(1.1);
        box-shadow: rgb(0 0 0 / 5%) 1px 1px 15px;
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

export default function Habilidades(){

    return(
        <SHabilidades>
            <div class="container">
                <div className="container-habilidades">
                    <div class="cards-habilidade">
                        <div class="card-tres">
                            <div class="card-tech">
                                <img src={Python} alt="python"/>
                                <div className="legenda-tech">
                                    <p>Python</p>
                                </div>
                            </div>
                            <div class="card-tech">
                                <img src={Java} alt="Java" />
                                <div className="legenda-tech">
                                    <p>Java</p>
                                </div>
                            </div>
                            <div class="card-tech">
                                <img src={HTML} alt="HMTL" />
                                <div className="legenda-tech">
                                    <p>HTML</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-tres">
                            <div class="card-tech">
                                <img src={CSS} alt="CSS" />
                                <div className="legenda-tech">
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div class="card-tech">
                                <img src={JS} alt="JavaScript" />
                                <div className="legenda-tech">
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            <div class="card-tech">
                                <img src={React} alt="React" />
                                <div className="legenda-tech">
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SHabilidades>
    )
}