import React  from 'react';

function TodoItem(props){

    return (
        <div onClick={() => {
            props.onChecked(props.id)
        }}>
          <li>{props.text}</li>
       </div>
    )
}

export default TodoItem; // serve para reutilizá-lo em outro componente