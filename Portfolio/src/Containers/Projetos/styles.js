import styled from "styled-components";
import ImagemProjetos from "../.././assets/BgProjetos.jpg"


export const ProjetosDiv = styled.div`

  
    height: 100%;  
    padding-top: 20px;
    
  
   h2 {
    color: #ffffff;    
    font-size: 60px;
    text-align: center;
   justify-content: center;
   align-items: center;
  }
  `
  export const Cards = styled.div` 
    display: flex;
    flex-wrap: wrap;
    justify-content: safe;
    gap: 50px;
    margin-left: 40px;
    padding-bottom: 40px;
    
    
  

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
height: max-content;
width: 100%;
margin-bottom: 0;
padding-bottom: 0;


`




export const Image = styled.img`
height: 100px;
width: 100px;
z-index: 10;
`