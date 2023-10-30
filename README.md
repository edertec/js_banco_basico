# Gerenciador de Tarefas com Node.js e SQLite
Descrição do Projeto
Este projeto é um gerenciador de tarefas desenvolvido como parte de uma 
aula prática em desenvolvimento web. O projeto utiliza HTML, CSS e JavaScript para o front-end e Node.js com SQLite para o back-end.

Arquitetura do Sistema

# Front-end
Tecnologias: HTML, CSS, JavaScript
Funções:
Adicionar tarefas
Listar tarefas
Interface de usuário

# Back-end
Tecnologias: Node.js, SQLite
Funções:
API RESTful para manipulação das tarefas
Operações CRUD no banco de dados SQLite
Instruções para Instalação
Ambiente de Desenvolvimento

Instale Node.js e npm
Instale um editor de texto (recomendado: Visual Studio Code)
Configuração Inicial

# Clone o repositório
Instale as dependências do projeto
- npm install

## Configuração do SQLite
Instale o pacote sqlite3
- npm install sqlite3

# Rode o servidor Node.js
npm start

FrontEnd
Dê duplo clique no index.html e deverá funcionar.

- BackEnd:
Abra um terminal e navegue até a pasta backend.
Execute npm init -y para criar um arquivo package.json. (senão tiver)
Execute: 
    - npm install express cors sqlite3 
    :para instalar as dependências necessárias.
Execute:
    - node index.js para iniciar o servidor. 
    :Ele deverá estar rodando em http://localhost:3000.