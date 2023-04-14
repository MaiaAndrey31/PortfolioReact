import {BgConhecimentos, Knowledge, Totems, H5, P, Image} from './styles'
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import CardSkills from '../../Components/SkillCards';
import HTMLLogo from '../.././assets/Html.png'
import CSSLogo from '../.././assets/CSS.png'
import JsLogo from '../.././assets/JS.png'
import NodeLogo from '../.././assets/Node.png'
import GitLogo from '../.././assets/Git.png'
import HubLogo from '../.././assets/Github.png'
import ReactLogo from '../.././assets/React.png'
import DockerLogo from '../.././assets/Docker.png'


function Conhecimentos() {

    return (
      <>
      <BgConhecimentos>
        <Header />
        <Knowledge>
            <h2>Conhecimentos</h2>
            <Totems>
                <CardSkills>
                    <Image src={HTMLLogo} />
                    <H5>HTML</H5>
                    <P>Tags e Elementos, hiperlinks, arquivos de mídia, criação de listas, tabelas e formulários.</P>

                </CardSkills>

                <CardSkills>
                <Image src={CSSLogo} />
                    <H5>CSS</H5>
                    <P>Estilização da estrutura HTML. Background, cores, fonts, layouts, espaçamentos e animações.</P>


                </CardSkills>

                <CardSkills>
                <Image src={JsLogo} />
                    <H5>JavaScript</H5>
                    <P>DOM, ES6 Modules, funções, Array, Objects, API, utilização de Classes, promises, Async Await...
                    </P>

                </CardSkills>
                <CardSkills>
                <Image src={NodeLogo} />
                    <H5>NodeJs</H5>
                    <P>Funcionalidades do NodeJs para o Back End Npm, Express, JSON códigos de alto rendimento para uma
                        entrega satisfatória no Back End.</P>

                </CardSkills>
            </Totems>
            <Totems >
                <CardSkills>
                <Image src={ReactLogo} />
                    <H5>React</H5>
                    <P>Construção de projetos, estilização, renderização de objetos entregando assim projetos com
                        mais
                        qualidade e alta performance.</P>
                </CardSkills>

                <CardSkills>
                    
                <Image src={GitLogo} />
                    <H5>GIT</H5>
                    <P>Versionamento de códigos,Repository, Branch, Commit e Stage.</P>

                </CardSkills>

                <CardSkills>
                    
                <Image src={HubLogo} />
                    <H5>GitHub</H5>
                    <P>Plataforma de hospedagem de código-fonte com controle de versionamento juntamente com o Git</P>

                </CardSkills>
                <CardSkills>
                    
                <Image src={DockerLogo} />
                    <H5>Docker</H5>
                    <P>Empacotamento de aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host com o Docker instalado.</P>

                </CardSkills>

            </Totems>
            </Knowledge>


      
      </BgConhecimentos>
      <Footer />
      </>
    )
  }
  
  export default Conhecimentos 