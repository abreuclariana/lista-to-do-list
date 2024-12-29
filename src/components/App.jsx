/* eslint-disable no-undef */
import React, { useState } from "react";
import TodoItem from './TodoItem'

function App() {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  };

  function addItem(id) {
    setItems( (prevItens) => {
      return [...prevItens, inputText]
    } )
    setInputText('')
  }

  function deleteItem(){
    setItems((prevItens) => {
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
            items.map( (todoItem, index) => <TodoItem 
            key={index} 
            id={index}
            text = {todoItem}
            onChecked={deleteItem}/> )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
