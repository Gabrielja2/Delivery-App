# Bem vindos ao repositório Trybe-Futebol-Club


<strong>👨‍💻 O que foi desenvolvido</strong><br />
    Esse projeto foi desenvolvido em grupo, com a ajuda do [Abdel](https://github.com/Abdel175), [Gabriel Lyra](https://github.com/GabrielLyra22), [Jeferson](https://github.com/jefersongjr), [João](https://github.com/joaovavelino) e [Vitor](https://github.com/vtrtga), aqui você vai encontrar os detalhes de como foi estruturado e instruções.    
  Este foi o projeto mais completo até agora! Nessa aplicação, nosso equipe, criou e integrou tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja. 🍻 

  A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas, agora possui alguns pontos de venda na cidade. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

  Como seu antigo sistema, que era um conjunto de planilhas, já não atendia a necessidade do negócio pois gerava muita manutenção.
  Nosso objetivo foi desenvolver uma aplicação que tenha:
  
    - Acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;

    - Comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;

    - Controle ao realizar o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

<br />

 
  Diagrama de entidades, as tabelas que foram criadas no banco de dados:
  ![Diagrama de ER](./assets/readme/eer.png)


# Orientações

<details>    
<summary><strong>Como ter acesso ao projeto e instalar as dependências</strong></summary><br />

    1. Entre na pasta do repositório que você acabou de clonar ou fazer o download do arquivo zip:
    * `cd pasta-do-repositório`

    2. Instale as dependências através do terminal:
    *`npm install`

    3. Suba a imagem do banco de dados do docker-compose com o comando:
    *`docker-compose up -d`
   
    4. Dentro de app/frontend, rode novamente o `npm install` e suba a aplicação com o comando `npm start` através do terminal.
   
    5. Dentro de app/backend, rode novamente o `npm install` e suba a api com o comando `npm run dev` através do terminal.
    
</details>


<details>    
<summary><strong>Frontend</strong></summary><br />

    - Javascript;
   
    - React;
    
    - Context;
    
    - FetchAPI;
    
</details>

    
<details>    
<summary><strong>Backend</strong></summary><br />
    
    - Node

    - ORM `Sequelize`; 
   
    - MySQL;
    
    - Express
    
    - JWT
</details>
    
<details>    
<summary><strong>Banco de dados</strong></summary><br />

    - Para o banco de dados, utilizamos o ORM `Sequelize`, para fazer interface com o `MySQL`
   
    - O Diagrama de ER também pode ajudar a "visualizar" o banco de dados;
</details>
