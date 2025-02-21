# Todo List API - A Simple & Powerful Task Manager

Welcome to the **Todo List API**! This is a simple yet powerful backend built with **Express** and a frontend in **React** to help you manage your daily tasks. Whether you're tackling a busy workday or keeping track of your personal projects, this application allows you to easily add, view, and delete tasks in a structured and efficient way.

## 🚀 Features

- **Add new tasks**: Quickly add tasks to your to-do list with just a few clicks.
- **View all tasks**: Get a clean and organized list of all your tasks.
- **Delete tasks**: Keep your to-do list neat by removing tasks you no longer need.

## 🎯 Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
  - [Frontend (React)](#frontend-react)
  - [Backend (API)](#backend-api)
- [Technologies Used](#technologies-used)
- [Getting Involved](#getting-involved)
- [License](#license)

## 🔍 About the Project

The Todo List app was designed with a **React** frontend and an **Express** backend. It allows users to:

- Add, view, and delete tasks from their to-do list.
- The backend manages the storage and deletion of tasks, while the frontend interacts with the API to update the UI.

This is a basic implementation that can easily be expanded with more features, such as user authentication, saving tasks in a database, and more.

## 🛠️ Installation

### Prerequisites

Make sure you have **Node.js** installed on your system. If you don't have it yet, download it from [nodejs.org](https://nodejs.org/).

### Step-by-Step Guide

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/abreuclariana/lista-to-do-list.git
   
2 Navigate into the project folder:
   
    cd lista-to-do-list-main

Install all required dependencies for both the frontend and backend:

    npm install

Install the backend packages globally (optional but recommended):

    npm install -g express cors body-parser nodemon

Start the development server:

    npm start
    

6. Frontend - React
   
O React é usado para criar uma interface interativa. O usuário pode adicionar e remover tarefas, e a lista é atualizada dinamicamente sem recarregar a página.

Adicionar tarefa: O usuário digita a tarefa e clica em "Adicionar". A tarefa é mostrada na lista.
Excluir tarefa: Ao clicar em uma tarefa, ela é removida da lista automaticamente.

7. Backend - Express
   
O Express serve como backend, gerenciando as requisições para obter, adicionar e excluir tarefas.

Obter tarefas: O frontend faz uma requisição para o servidor buscar as tarefas.
Adicionar e excluir tarefas: O frontend envia dados para o servidor, que adiciona ou remove tarefas da lista.
8. Integração entre Frontend e Backend
Frontend e backend se comunicam através de APIs. Quando o usuário interage com a interface, o frontend envia requisições para o backend, que manipula os dados e responde com as atualizações.

9. Tecnologias Utilizadas
    
React para o frontend.
Express e Node.js para o backend.
CORS e Body-Parser para lidar com requisições HTTP.
Nodemon para reiniciar o servidor durante o desenvolvimento.

10. Como Executar o Projeto

 Clone o repositório:

    git clone https://github.com/your-username/todo-list.git
Instale as dependências e inicie o frontend e backend:

Frontend:

    cd frontend
    npm install
    npm start
    
Backend:

    cd backend
    npm install
    npm start

Acesse a aplicação em http://localhost:3000.

11. Melhorias Futuras
Banco de dados para persistir as tarefas.
Autenticação de usuários.
Edição de tarefas.
Interface mais rica, com opções para marcar tarefas como concluídas.








