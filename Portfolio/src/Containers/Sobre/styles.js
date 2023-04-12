import styled from 'styled-components';
import Foto from '../../assets/Andrey-sobre.png';
import BG from '../../assets/BG-About.jpg'


export const About = styled.div`

 .container {
    display: flex;
  align-items: center;
  padding-left: 45px;
  
}


div h2 {
    color: #ffffff;
  font-size: 75px;
}
div p {
  color: #feffbb;

  font-size: 28px;
  width: 600px;
  margin-top: 10px;
  margin-bottom: 40px;
}

div button {
  color: #191919;
  background: #f9d004;
  height: 90px;
  width: 300px;
  font-size: 26px;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  cursor: pointer;
}
div a {
  text-decoration: none;
  color: #191919;
  height: 90px;
  width: 200px;
}
div a button:hover {
  background-color: #000000;
  border: 3px solid #f9d004;
  color: #ffffff;
  transition: 0.8s;
}
 


`

export const ImagemAndrey = styled.img`


    background-image: url(${Foto});
    display: flex;
    height: 440px;
    width: 440px;
  border-radius: 100%;
  border: 2px solid #f9d400;
 margin-left: 35px;

`

export const BgAbout = styled.div` 
background-image: url(${BG});
width: 100%;
height: 100vh;
background-size: cover;

`