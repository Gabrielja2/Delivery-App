# Bem vindos ao repositório Trybe-Futebol-Club


<strong>👨‍💻 O que foi desenvolvido</strong><br />
    * Aqui você vai encontrar os detalhes de como foi estruturado este projeto e instruções para rodar.    
    * O `TFC` é um site informativo sobre partidas e classificações de futebol! ⚽️.    
    * **Desenvolvido cumprindo todas as regras de negócio** estabelecidas e **essa API é capaz de ser consumida por um front-end já provido nesse projeto**.

<details>   
   <summary><strong> Estrutura do projeto</summary></strong><br />
      
   O projeto é composto de 4 entidades importantes para sua estrutura:

   1️⃣ **Banco de dados:**
     - Será um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
     - Tem o papel de fornecer dados para o serviço de _backend_.  
     - Você também pode conectar a um Cliente MySQL (Workbench, Beekeeper, DBeaver e etc), colocando as credenciais configuradas no docker-compose no serviço `db`.

   2️⃣ **Back-end:** 
    - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
    - Garanta que o `express` é executado e a aplicação ouve a porta que vem das variáveis de ambiente;


   3️⃣ **Front-end:**
     - O front já estava concluído.
     - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints construidos. 

   4️⃣ **Docker:**
     - O `docker-compose` tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando `npm run compose:up` ou `npm run compose:up:dev`;
     - Os `Dockerfiles` estão já estão configurados corretamente nas raízes do `front-end` e `back-end`, para conseguir inicializar a aplicação;
      <br/>
 </details>

# Orientações

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador. 

  <br/>
</details>

<details>
<summary><strong>Como ter acesso ao projeto e instalar as dependências</strong></summary><br />

    1. Entre na pasta do repositório que você acabou de clonar ou fazer o download do arquivo zip:
    * `cd pasta-do-repositório`

    2. Instale as dependências através do terminal:
    *`npm install`

    3. Suba os imagens do servidor node e do banco de do docker-compose com o comando:
    *`docker-compose up -d`
   
    4. Dentro de app/frontend, suba a aplicação com o comando `npm start` através do terminal.
   
    5. Dentro de app/backend, suba a api com o comando `npm start` através do terminal.
    
</details>
