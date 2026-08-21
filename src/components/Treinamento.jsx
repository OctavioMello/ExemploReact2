import { useState } from "react"

const Treinamento = () => {


    const [treinamento, setTreinamento] = useState(0);

  return (
    <>
    <h1>Nota do Treinamento: {treinamento}</h1>
      <button onClick={()=>setTreinamento(treinamento+1)}>Aumentar</button>
    </>
  )
}

export default Treinamento
