import { NavHeader } from "./styles"

function Header() {

    return (
        <NavHeader>
        <h2>
          Portifo<span>lio</span>
        </h2>

        <ul>
          <li>
            <a>
              Home
            </a>
          </li>
          <li>
            <a >
              Sobre
            </a>
          </li>
          <li>
            <a>
              Projetos
            </a>
          </li>
          <li>
            <a>
              Conhecimentos
            </a>
          </li>
          <li>
            <a>
              Fale Comigo
            </a>
          </li>
        </ul>
      </NavHeader>
    )
}

export default Header