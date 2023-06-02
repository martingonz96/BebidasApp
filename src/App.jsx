import { Container, Modal } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriasProvider } from "./context/CategoriaProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import ListadoDeBebidas from "./components/ListadoDeBebidas"
import ModalBebida from "./components/ModalBebida"

function App() {

  return (
    <>
    <CategoriasProvider>
    <BebidasProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario/>
        <ListadoDeBebidas/>
        <ModalBebida/>
      </Container>
    </BebidasProvider>
    </CategoriasProvider>  
    </>
  )
}

export default App
