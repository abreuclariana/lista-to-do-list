// Importando os pacotes necessários
const express = require("express"); // Express é utilizado para criar o servidor e gerenciar as rotas.
const bodyParser = require("body-parser"); // Body-parser é usado para analisar os corpos das requisições HTTP.
const cors = require("cors"); // CORS permite que o servidor aceite requisições de diferentes origens (domínios).

// Criando uma instância do aplicativo Express
const app = express(); 
const PORT = 5000; // Definindo a porta onde o servidor vai rodar

// Usando middlewares
app.use(cors()); // Permite que o servidor aceite requisições de qualquer origem.
app.use(bodyParser.json()); // Analisa os corpos das requisições como JSON, facilitando o manuseio dos dados.

let todos = []; // Array temporário para armazenar as tarefas (esse array será substituído por um banco de dados mais tarde, se necessário).

// Rota GET para obter todas as tarefas
app.get("/todos", (req, res) => {
  res.json(todos); // Envia todas as tarefas armazenadas no array 'todos' para o cliente em formato JSON.
});

// Rota POST para adicionar uma nova tarefa
app.post("/todos", (req, res) => {
  const { text } = req.body; // Obtém o texto da nova tarefa enviado no corpo da requisição.
  
  // Verifica se o texto foi fornecido
  if (!text) {
    return res.status(400).json({ error: "Texto da tarefa é obrigatório" }); // Se o texto não foi enviado, retorna um erro.
  }

  // Cria um novo objeto de tarefa com um id único baseado no timestamp atual
  const newTodo = { id: Date.now(), text }; 
  todos.push(newTodo); // Adiciona a nova tarefa ao array 'todos'.
  res.status(201).json(newTodo); // Retorna a tarefa recém-criada com status 201 (Criado).
});

// Rota DELETE para deletar uma tarefa pelo ID
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id); // Obtém o ID da tarefa a ser removida da URL.
  
  // Filtra as tarefas, removendo aquela com o ID fornecido
  todos = todos.filter(todo => todo.id !== id);
  res.status(200).json({ message: "Tarefa removida" }); // Retorna uma mensagem de sucesso.
});

// Inicializa o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); // Mensagem exibida no console quando o servidor começar a rodar.
});
