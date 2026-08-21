

const Curso = (props) => {
  return (
    <>
      <p>Nome do curso: {props.curso}</p>
      <p>Descrição: {props.descricao}</p>
      <p>Data: {props.data}</p>
    </>
  )
}

export default Curso
