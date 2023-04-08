import { Background, Name  } from "./styles";
import Header from '../../Components/Header/index'

function Home() {
  return (

    <Background> 
     <Header />
            
          <Name>
         
          <h1 className="animacao">Andrey <span>Maia</span></h1>
          
          <h3 className="animacao-principal">Desenvolvedor Front End</h3>
          </Name>
             
      </Background>
   
  );
}

export default Home;
