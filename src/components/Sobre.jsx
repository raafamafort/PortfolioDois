import styled from "styled-components"

const SSobre = styled.div`
     .container{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 4vh;
        width: 100%;
        min-height: 65vh;
        max-height: 65vh;
        background-color: #121212;
    }

    .container-sobre{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .texto{
        display: flex;
        width: 50vw;
        height: 45vh;
        flex-direction: column;
        gap: 2vh;
        text-align: center;
        color: #E6E6E6;
        font-size: 2vw;
        margin: 0vw 5vw 0vw 10vw;
        align-items: center;
        justify-content: center;
    }

    .info{
        display: flex;
        flex-direction: column;
        gap: 5vh;
        margin: 0vw 0vw 0vw 5vw;
    }

    .info-card{
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 0.2rem;
        color: #E6E6E6;
        font-size: 1.5vw; 

        p{
            white-space: nowrap;
        }

        h3{
            color:#FFC303;
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
            min-height: 61vh;
            max-height: 61vh;
        }
    }

    @media(max-width: 600px){
        .container-sobre{
            flex-direction: column;
            gap: 2vh;
        }

        .info{
            flex-direction: row;
        }

        .texto{
            font-size: 3.2vw;
        }

        .info-card{
            font-size: 2.2vw; 
        }
    }
    
    @media(max-width: 400px){
        .info{
            flex-direction: column;
            gap: 1vh;
        }

        .container-sobre{
            gap: 0;
        }

        .texto{
            margin: 0;
            height: 35vh;
        }
    }
`

export default function Sobre(){

    return(
        <SSobre>
            <div class="container">
                <div className="container-sobre">
                    <div  className="info">
                        <div className="info-card">
                            <h3>NOME: </h3>
                            <p>Rafael Mafort Coimbra</p>
                        </div>
                        <div className="info-card">
                            <h3>NASCIMENTO: </h3>
                            <p>22 de setembro de 2003</p>
                        </div>
                        <div className="info-card">
                            <h3>LOCAL: </h3>
                            <p>Brasil | São Paulo - SP</p>
                        </div>
                    </div>
                    <div class="texto">
                        <p>Atualmente estou cursando Análise e Desenvolvimento de Sistemas na FIAP, tenho conhecimento em back-end e front-end além da aplicação de metodologias ágeis, como SCRUM.</p>
                        <p>Desde sempre fui muito apaixonado por tecnologia, matemática e lógica e pretendo evoluir cada vez mais para me tornar um grande profissional na área.</p>
                    </div>
                </div>
            </div>
        </SSobre>
    )
}