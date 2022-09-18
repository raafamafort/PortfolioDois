import styled from "styled-components"

const SHome = styled.div`
     .container{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 4rem;
        width: 100%;
        min-height: 69vh;
        max-height: 69vh;
        background-color: #121212;
    }

    .texto{
        text-align: center;
        font-size: 2.5vw;
        color: #efefef;
        
        h1{
            color: #FFC303;
        }

        h2{
            color: #49C663;
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

`

export default function Home(){

    return(
        <SHome>
            <div class="container">
                <div class="texto">
                    <h2>"Hello World!"</h2>
                    <p>Eu sou</p>
                    <h1>Rafael Mafort Coimbra</h1>
                    <h3>Desenvolvedor Full-Stack</h3>
                </div>
            </div>
        </SHome>
    )
}