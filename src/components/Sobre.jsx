import styled from "styled-components"

const SSobre = styled.div`
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

    .texto{
        text-align: center;
        color: #E6E6E6;
        font-size: 4rem;
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

export default function Sobre(){

    return(
        <SSobre>
            <div class="container">
                <div class="texto">
                    <h2>SOBRE</h2>
                </div>
            </div>
        </SSobre>
    )
}