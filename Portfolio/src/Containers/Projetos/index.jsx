import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import CardProjetos from "../../Components/ProjectsCards";
import { BgProjetos, ProjetosDiv, Cards, Image, H3, P, A, Net, Cron, Star } from "./styles";


function Projetos() {
    return (
      <>
      <BgProjetos>
        <Header />
        <ProjetosDiv>
        <h2>Principais Projetos</h2>
        <Cards>
            <CardProjetos>
                <Image url={Net}/>
                <H3>Netflix</H3>
                <P>Projeto realizado, por alunos do Dev Club, montando uma pagina clone da Netflix. Utilizando HTML e
                    CSS.</P>
                <A href="https://maiaandrey31.github.io/Netflix/" target="_blank">Ver Projeto</A>
                </CardProjetos>

            
                <CardProjetos>
                <H3>Previsão do tempo</H3>
                <P>Projeto com funcionamento em em tempo real com Consumo de API.</P>
                <A href="https://previsaoapp.netlify.app/" target="_blank">Ver Projeto</A>
                </CardProjetos>

                <CardProjetos>
                <Image url={<Star/>}  />
                <H3>Starbucks</H3>
                <P>Projeto Realizado como uma Landing Page da Starbucks para aprimorar os conhecimentos em HTML, CSS e
                    JavaScript.</P>
                <A href="https://maiaandrey31.github.io/Starbucks/" target="_blank">Ver Projeto</A>
                </CardProjetos>
                <CardProjetos>
                <Image url= {<Cron/>} />
                <H3>Cronômetro</H3>
                <P>Realização do projeto utilizando HTML, CSS e JavaScript. Confira o Projeto e funcionalidade no botão
                    abaixo.</P>
                <A href="https://maiaandrey31.github.io/Cronometro/" target="_blank">Ver Projeto</A>
                </CardProjetos>
            
                <CardProjetos>
                <H3>Conversor de Moedas</H3>
                <P>Projeto HTML, CSS e JavaScript. Consumo de API, convertendo com a cotação em tempo real. Confira!
                    abaixo.</P>
                <A href="https://maiaandrey31.github.io/Conversor-de-Moedas/" target="_blank">Ver Projeto</A>
                </CardProjetos>
            
        </Cards>
        </ProjetosDiv>
    
      </BgProjetos>
      <Footer />
      </>
    );
  }
  
  export default Projetos;