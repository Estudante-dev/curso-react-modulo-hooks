import { useEffect, useState } from "react";

function App() {

  // const [texto, setTexto] = useState("Olá mundo!");

  const [qtd, setQtd] = useState(0);

  useEffect(() => {
    alert(`Você adicionou ${qtd} tênis`);
  }, [qtd])


  function aumentarQtd(){
    setQtd(qtd + 1)
  };

  return (
    <>

    <h1>Tênis</h1>
    <p>Quantidade: {qtd}</p>
    <button onClick={aumentarQtd}>Adicionar</button>
    <p>Preço total: {50 * qtd}</p>

    {/* <h1>{texto}</h1>
    <button onClick={() => setTexto("Olá")}>Atualizar</button> */}
    </>
  );
}

export default App;
