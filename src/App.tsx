import './App.css'
import { Button } from './button'
import { Product } from './products';

function App() {
  const textoBotoes = ['Botão 1', 'Botão 2', 'Botão 3'];


  return (
    <>
      <h1>Hello World!</h1>
      {textoBotoes.map((texto) => (
        <Button props={texto} />
      ))}

      <Product/>
    </>
  )
}

export default App