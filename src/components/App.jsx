/* eslint-disable no-undef */
import React, { useState } from "react";
import TodoItem from './TodoItem'

function App() {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]); // quando o input vier, eu pego esse input com o newvalue e add nesse array vazio

  function handleChange(event) {
    const newValue = event.target.value; //acessa e armazena o valor da variável value

    setInputText(newValue); // esse campo serve para capturar o evento de alteração do campo digitado
  };

  function addItem(id) {
    setItems( (prevItens) => {  // recebe o array completo e conseguir acessar esse array completo através dessa arrow function
      return [...prevItens, inputText] // aqui retorna o array copmleto e depois retornar o input do usuário
    } )
    setInputText('')   // esse campo serve pra o campo onde é inserido os nomes volte a ficar vazio
  }

  function deleteItem(id){
    setItems((prevItens) => { // essa função serve para apagar os nomes da lista ao clicar com o botão do mouse em cima do nome
         return prevItens.filter((item, index) => { 
            return index !== id // que seja diferente do id
         })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}> 
          <span>Adicionar</span>
        </button>
      </div>
      <div>
        <ul>
          {
            items.map( (todoItem, index) => <TodoItem // serve para renderizar o array em tela/ captura, salva no input e depois renderiza
            key={index} 
            id={index}
            text = {todoItem}
            onChecked={() => deleteItem(index)}/> ) // esse atributo com a função deleteItem será enxergado no componente filho que será passado via props
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
