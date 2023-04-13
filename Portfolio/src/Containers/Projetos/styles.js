import styled from "styled-components";
import ImagemProjetos from "../.././assets/BgProjetos.jpg"
import Netflix from '../.././assets/netflix.png'
import Starbucks from '../.././assets/starbucks.png'
import Crono from '../.././assets/crono.png'

export const ProjetosDiv = styled.div`

  
    height: 100%;  
    padding-top: 20px;
    
  
   h2 {
    color: #ffffff;    
    font-size: 40px;
    text-align: justify;
   justify-content: center;
   align-items: center;
  }
  `
  export const Cards = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
  

  `



export const H3 = styled.h3`
color: #ffffff;
font-size: 25px;
`

export const P = styled.p`
color: #feffbb;
margin-top: 20px;
margin-bottom: 40px;
font-size: 17px;
`

export const A = styled.a` 
background-color: #f9d400;
color: #191919;
padding: 10px 20px;
border-radius: 25px;

text-decoration: none;

&:hover {
background-color: transparent;
border: 2px solid #f9d400;
color: #ffffff;
transition: 0.6s;
}
`

export const BgProjetos = styled.div`
background-image: url(${ImagemProjetos});
background-size: cover;
height: 170vh;
width: 100vw;
margin-bottom: 0;
padding-bottom: 0;


`
export const Net = styled.img`
background-image: url(${Netflix});
height: 90px;
width: 90px;
background-size: cover;
`
export const Cron = styled.img`
background-image: url(${Crono});
height: 90px;
width: 90px;
background-size: cover;
`
export const Star = styled.img`
background-image: url(${Starbucks});
height: 90px;
width: 90px;
background-size: cover;
`


export const Image = styled.img`
height: 100px;
width: 100px;
z-index: 10;
`