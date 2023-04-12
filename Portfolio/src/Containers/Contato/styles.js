import styled from "styled-components";
import FotoContato from '../.././assets/BgContato.jpg';
import Telefone from "../../assets/telefone.png";
import GitHub from "../../assets/GitHub-Mark.png"
import Linkedin from "../../assets/linkedin.png";

export const FaleComigo = styled.div`
.contato {
    
    padding-top: 100px;
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .contato h5 {
    color: #f9d400;
    font-size: 39px;
    text-shadow: 8px 8px 10px #000000;
  }
  .contato p {
    color: #ffffff;
    text-shadow: 8px 8px 10px #000000;
    font-size: 20px;
    margin-bottom: 30px;
    margin-top: 14px;
  }
  
  .social {
    display: flex;
    gap: 20px;
  }
  
 
   .social a {
    background-color: #f9d400; 
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .social a:hover {
    transform: scale(1.3);
    transition: 1s;
  } 
  
  .contato form {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 1.4rem;
    margin: auto;
  }
  
  .contato form input {
    width: 420px;
    height: 28px;
    padding: 20px;
    margin-top: 30px;
    background: #0f0c0cf5;
    border: 1px solid #0f0c0cf5;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
  }
  
  .contato form textarea {
    height: 160px;
    width: 420px;
    padding: 50px;
    background: #0f0c0cf5;
    border: 1px solid #0f0c0cf5;
    border-radius: 10px;
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 2px;
  }
  
  .contato form label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0.0);
    white-space: nowrap;
    border-width: 0;
  }
  
  .contato form button {
    height: 50px;
    width: 180px;
    margin: 3rem auto;
    background: #f9d004;
    border: none;
    border-radius: 10px;
    color: #000000;
    font-size: 22px;
    font-weight: 600;
    transition: all 0.6s;
  }
  
  .contato form button:hover {
    filter: brightness(0.7);
    cursor: pointer;
    transform: scale(0.97);
  }
  `
 
  export const BgContato = styled.div`
  background-image: url(${FotoContato});
    background-size: cover;
  
  `
 
  export const GitHubContato = styled.div`

  background-image: url(${GitHub});
    height: 36px;
    border-radius: 50%;
  z-index: 2;
  
  
  `
   export const LinkedinContato = styled.div`
   background-image: url(${Linkedin});
    height: 36px;
    border-radius: 50%;
   z-index: 2;
   
   `
    export const TelefoneContato = styled.div`
    background-image: url(${Telefone});    
    height: 36px;
    border-radius: 50%;
    z-index: 2;
    
    `
   