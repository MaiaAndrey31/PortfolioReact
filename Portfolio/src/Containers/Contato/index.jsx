import Header from "../../Components/Header";
import { BgContato, FaleComigo, GitHubContato, LinkedinContato, TelefoneContato } from "./styles";
import Footer  from "../../Components/Footer";


function Contato() {
    return (
      <>

      <BgContato>
        <Header />
      <FaleComigo>
      <div className="contato" id="fale-comigo">
      <h5>Andrey <span>Maia</span></h5>
      <p>Para mais informações</p>
      <div className="social">
          <a href="https://contate.me/andrey-maia" target="_blank">
            <TelefoneContato/>
          </a>
          <a href="https://www.linkedin.com/in/maia-andrey/" target="_blank">
              <LinkedinContato/>
          </a>
          <a href="https://github.com/MaiaAndrey31" target="_blank">
              <GitHubContato />
          </a>

      </div>


      <form action="https://formsubmit.co/maiaandrey31@outlook.com" method="POST">
          <div className="form-group">
              <div className="form-row">
                  <div className="col">
                      <input type="text" name="name" class="form-control" placeholder="Nome" required />
                  </div>
                  <div className="col">
                      <input type="email" name="email" class="form-control" placeholder="Email" required />
                  </div>
              </div>
          </div>
          <div className="form-group">
              <textarea placeholder="Digite sua mensagem aqui..." className="form-control" name="message" rows="10"
                  required></textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-dark btn-block">Enviar</button>
      </form>
  </div>
  </FaleComigo>
  </BgContato>
 
  <Footer />
  </>
  
    );
  }
  
  export default Contato;