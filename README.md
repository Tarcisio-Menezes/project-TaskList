# Boas vindas ao repositório do projeto Task-List!

Esta é uma aplicação full-stack de gerenciamento de tarefas rápidas. Ideal para
tornar o ambiente de trabalho mais organizado e consequentemente mais produtivo.

# Tecnologias de back-end

  * Node.js

  * Express

  * MongoDB

  * JSON Web Token

# Tecnologias de front-end

  * React.js

  * ContextAPI

  * Hooks

  * CSS

---

## Para executar a aplicação:

1. Clone o repositório
  * `git clone git@github.com:Tarcisio-Menezes/project-TaskList.git`
  * Utilizando o terminal, entre na pasta do repositório que você acabou de clonar 
  * Entre na pasta `backEnd`


2. Inicie sua instâcia MongoDB
  * No linux: `sudo systemctl start mongod.service`


3. Instale as dependências e inicialize a aplicação
  * Instale as dependências:
    * `npm install`
  * Inicie a aplicação:
    * `npm start`
    * A mensagem `on-line na porta 3000 será exibida no terminal`


4. Agora vamos iniciar o front:
  * Volte um nível com `cd ..`
  * Entre na pasta `frontEnd`


5. Instale as dependências e inicialize a aplicação
    * Instale as dependências:
      * `npm install`
    * Inicie a aplicação:
      * `npm start`
      * Uma nova aba de seu navegador será aberta com a aplicação
  

 * Se você não possuir o `npm` instalado em sua máquina:
   * Faça o download [aqui](https://www.npmjs.com/package/download)

 * Se você não possuir o `MongoDB` instalado em sua máquina:
   * Faça o download [aqui](https://www.mongodb.com/try/download/community)

## Como usar a aplicação:

* Ebyrt Ágil foi projetado para telas convencionais de computadores.

* A aplicação vai iniciar na página de login principal.
  * Novos usuários devem clicar no link `Crie seu usuário aqui`

* Você será redirecionado para a tela de cadastros
  * Digite o seu nome de usuário e senha. Não há restrição de números de caracteres

* Clique em cadastrar. Um alert comunicará se foi possível criar o seu usuário com sucesso
  * Com o usuário cadastrado, clique em `Voltar para Login`

* Digite o seu usuário e senha cadastrados na tela anterior
  * Clique em `Entrar`, você será redirecionado para a tela principal

* Como novo usuário, você não terá tarefas para mostrar
  * Para adicionar uma nova tarefa, preencha as caixas te texto conforme indicado pelos placeholders e clique em enviar

* O campo título deve ser preenchido somente com letras minúsculas e o prazo deve ser em formato `DD/MM/AA`

* A tarefa será adicionada em seu painel

* Para editar uma tarefa utilize os mesmos campos de texto e clique em `editar` no card de tarefa a ser editado
  * Para poupar tempo você pode copiar e colar os dados da tarefa a ser editada, colar nos campos de texto e modificar apenas o campo que deseja editar

* Para excluir uma tarefa, apenas clique no botão `Deletar` no card da tarefa

* Na parte superior, clique no botão `Ordem alfabética` para ordenar as tarefas por ordem alfabética de título

* Para sair do sistema clique no botão `Sair`, na parte inferior esquerda da tela
  * Você será redirecionado para a tela de login
  
* Caso você tente fazer login com usuário incorreto, um alert será emitido

---
