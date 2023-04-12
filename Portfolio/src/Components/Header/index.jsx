import { NavHeader } from "./styles"

function Header() {

    return (
        <NavHeader>
        <h2>
          Portifo<span>lio</span>
        </h2>

        <ul>
          <li>
            <a href="/" >
              Home
            </a>
          </li>
          <li>
            <a href='/sobre'>
              Sobre
            </a>
          </li>
          <li>
            <a href='projetos'>
              Projetos
            </a>
          </li>
          <li>
            <a href='conhecimentos'>
              Conhecimentos
            </a>
          </li>
          <li>
            <a href='contato'>
              Fale Comigo
            </a>
          </li>
        </ul>
      </NavHeader>
    )
}

export default Header