import { BgAbout, About, ImagemAndrey } from "./styles";
import Header from '../../Components/Header'

function Sobre() {
    return (
      <BgAbout>
        <Header />
        <About>
       <div className="container">
          <div>
            <h2>Sobre Mim</h2>
              <p>Sou apaixonado por tecnologia e por isso resolvi me tornar programador, realizando minha transição de
              carreira.
              Na programação tenho sólidos conhecimentos de Front end com tecnologias como:
              HTML , CSS e JavaScript, inclusive realizei alguns projetos utilizando essas tecnologias.
              Atualmente estudando Back end e realizando projetos de qualidade e alta performance com
              React, NodeJs e banco de dados.</p>
              <a href='contato'><button>Entre em Contato</button></a>
          </div>
          <ImagemAndrey/>
      </div>
      

      </About>

  </BgAbout>
    );
  }
  
  export default Sobre;