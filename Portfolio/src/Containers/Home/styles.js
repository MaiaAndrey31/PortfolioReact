import styled from 'styled-components'
import ImagemEscolhida from '../.././assets/Homeimg.jpg'


export const Name = styled.div`
   position: absolute;
  top: 60%;
  left: 7%;
  h1 { 
    border-right: 2px solid #ffffff;
  color: #ffffff;
  font-size: 80px;
  font-weight: 700;
}



h1 span {
  color: #f9d400;
}
h3 {
    color: #ffffff;
  font-size: 27px;
  font-weight: 500;
}
.animacao {

    animation: blinkcursor 500ms steps(28) normal infinite,
    typing 2.8s steps(28) 3s normal both;
  white-space: nowrap;
  overflow: hidden;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 6.6em;
  }
}

@keyframes blinkcursor {
  from {
    border-right: 2px solid #ffffff;
  }
  to {
    border-right: transparent;
  }
}
.animacao-principal {
  color: #ffffff;
  font-size: 27px;
  font-weight: 500;
  opacity: 0;
}

@keyframes slide {
  from {
    transform: translateX(-400px) scale(6);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animacao-principal {
  animation: slide 2.2s linear forwards 1s;
}





`


export const Background = styled.div `

background-image: url( ${ ImagemEscolhida} ) ;
height: 100vh;
width: 100%;
background-size: cover;
z-index: 0;

`

