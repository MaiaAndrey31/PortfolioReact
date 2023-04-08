import { Route, Routes} from 'react-router-dom'

import Home from '.././Containers/Home'
import Sobre from '.././Containers/Sobre'
import Conhecimentos from '.././Containers/Conhecimentos'
import Projetos from '.././Containers/Projetos'
import Contato from '.././Containers/Contato'


function Router() {

    return (
        <Routes>
            
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/conhecimentos" element={<Conhecimentos />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            
        </Routes>
    )
}

export default Router