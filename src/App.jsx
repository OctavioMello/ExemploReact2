import Aluno from "./components/Aluno"
import Dados from "./components/Dados"
import Contador from "./components/Contador"
import Treinamento from "./components/Treinamento"
import Curso from "./components/Curso"

const App = () => {
  return (
    <>
    <Aluno nome="Fiap" idade="30"/>
    <Dados usuario="Dev" email="dev@email.com"/>
    <Contador/>
    <Treinamento/>
    <Curso curso="Engenharia de Software" descricao="Programação" data="21/08/2026"/>
    </>
  )
}

export default App
