import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


//DESAFIO: Faça esta aplicação funcionar aplicando o que você aprendeu.
//1. Quando um novo texto é escrito na entrada, seu estado deve ser salvo.
//2. Quando o botão adicionar é pressionado, os dados atuais na entrada devem ser
//adicionado a um array.
//3. O <ul> deve exibir todos os itens do array como <li>

/*
const fullName = {
    fName: 'Buda',
    lName: 'filósofo'
}

const user = {
    ...fullName,
    id: 1,
    userName: 'Clariana'
}

*/


/*
const frutasCitricas = ['Limão', 'Abacaxi', 'Caju'];

const frutas = ['Maçã', 'Banana', 'Laranja'];

//forma antiga

for(let index = 0; index < frutasCitricas.length; index++){
    frutas.push(frutasCitricas[index])
}

console.log(frutas)
*/