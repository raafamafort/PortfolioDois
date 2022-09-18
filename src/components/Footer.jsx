import styled from "styled-components"
import Linkedin from "../img/redessociais/linkedin.png"
import Github from "../img/redessociais/github.png"
import Email from "../img/redessociais/email.png"
import CV from "../img/redessociais/curriculo.png"

export default function Footer(){

    const SFooter = styled.div`
    .footer{
        display: flex;
        gap: 4rem;
        justify-content: center;
        align-items: center;
        padding: 1.2rem;
        background-color: #121212;
    }

    .img-redesocial{
        transition: transform 0.4s;
        transition: all 0.3s ease 0s;
    }

    .img-redesocial img{
        width: 4vh;
    }

    .img-redesocial:hover{
        transform: scale(1.2);
    }

    /* Responsive */

    @media(max-width: 1440px){
        .img-redesocial img{
            width: 3vh;
        }
    }

    @media(max-width: 520px){
        .img-redesocial img{
            width: 2vh;
        }

        .footer{
            gap: 2rem;
        }
    }

    `

    return(
        <SFooter>
            <div className='footer'>
                <a href="mailto:rafaelmafortc@gmail.com" target="_blank" className='img-redesocial'>
                <img src={Email} alt="email"/>
                </a>
                <a href="https://www.linkedin.com/in/rafael-mafort-c/" target="_blank" className='img-redesocial'>
                <img src={Linkedin} alt="linkdin"/>
                </a>
                <a href="https://github.com/raafamafort" target="_blank" className='img-redesocial'>
                <img src={Github} alt="github"/>
                </a>
                <a href="https://drive.google.com/file/d/1sLlsuW1BCdsOgc0gth-WgdnuSOO2pl0Z/view?usp=sharing" target="_blank" className='img-redesocial'>
                <img src={CV} alt="Curriculo"/>
                </a>
            </div>
      </SFooter>
    )
}