<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><h1 align="center">chatbot_fit_telegram</h1>
<p align="center">
  <b>um projeto de Telegram chat bot utilizando NodeJS e Google DialogFlow</b></br>
  <sub>Este é um repositório com um pequeno projeto de chat bot fitness para Telegram, que entrega links de vídeos de treinos físicos no youtube requisitados pelo usuário no chat do Bot. Foi desenvolvido utilizando Node.js e Google DialogFlow durante o Bootcamp de NodeJS da plataforma Digital Innovation One<a href='http://digitalinnovationone.one'>(DIO)</a>.<sub>
</p>

<br />


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ Telegram](#-telegram)
	* [Criando o bot](#criando-o-bot)
* [➤ Dialogflow](#-dialogflow)
	* [Como Gerar credenciais](#como-gerar-credenciais)
	* [Crie o fluxo de conversa do seu bot no DialogFlow](#crie-o-fluxo-de-conversa-do-seu-bot-no-dialogflow)
* [➤ Youtube API](#-youtube-api)
	* [Obter Credenciais](#obter-credenciais)
* [➤ Como rodar o projeto](#-como-rodar-o-projeto)
* [➤ Bibliotecas utilizadas no projeto](#-bibliotecas-utilizadas-no-projeto)
* [➤ Contributors](#-contributors)
* [➤ License](#-license)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#telegram)

## ➤ Telegram
- [https://web.telegram.org/](https://web.telegram.org/)

### Criando o bot
- Se cadastre no Telegram (Você pode usar o cliente web, desktop ou mobile)
- Abra o aplicativo ou acesse o website
- Pesquise por @BotFather e inicie a conversa
- Envie o comanndo /newbot e execute as instruções
- Copie o token enviado pelo @BotFather (Vamos usá-lo no código)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#dialogflow)

## ➤ Dialogflow
- [https://dialogflow.com/](https://dialogflow.com/)

### Como Gerar credenciais
- [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts) (Dialogflow) Vá para a conta de serviço criada pelo Dialogflow e gere o arquivo json com as credenciais

### Crie o fluxo de conversa do seu bot no DialogFlow
[https://dialogflow.com/](https://dialogflow.com/)
Utilize o painel do DialogFlow para cadastrar intents, entities, palavras-chaves e seus sinônimos, e algumas respostas para treinar o algoritmo a identificar e responder as requisições dos usuários.
- Crie um novo agent
- Escolha um projeto já existente ou crie um projeto novo
- Clique na engrenagem para configurar o agent
- Clique no service id, você será redirecionado para o painel do GCP, clique nos (...) abaixo de ações e crie - uma chave to tipo json
- Após o download da chave, substitua o conteúdo do arquivo agent.json pelo conteúdo da sua chave
- Crie uma nova intenção chamada "Treino específico"
- Adicione frases de treinamento com algumas partes do corpo
- Defina entidades do tipo "corpo" e seus sinônimos

Documentação: [https://cloud.google.com/dialogflow/cx/docs](https://cloud.google.com/dialogflow/cx/docs)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#youtube-api)

## ➤ Youtube API
- [https://console.cloud.google.com/apis/](https://console.cloud.google.com/apis/)

### Obter Credenciais
- Selecione o seu projeto
- Em Library (Biblioteca) busque por Youtube Data API
- Ative a API
- Selecione Credentials (Credenciais) no painel esquerdo
- Selecione **+ CREATE CREDENTIALS**
- Gere/Copie sua Key


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#como-rodar-o-projeto)

## ➤ Como rodar o projeto
  - Efetuar o clone do repositório em uma pasta do sistema operacional
  - Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
  - Substituir o arquivo de credenciais do bot criado pelo DialogFlow, e os valores das váriaveis BOTFATHER_TOKEN com o token obtido no Telegram e do YOUTUBE_API_TOKEN no arquivo **.env**
  - Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#bibliotecas-utilizadas-no-projeto)

## ➤ Bibliotecas utilizadas no projeto
- [dialogflow](https://www.npmjs.com/package/dialogflow) (Comunicação com o Dialogflow)
- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) (Comunicação com o Telegram)
- [youtube-node](https://www.npmjs.com/package/youtube-node) (Faz a busca de vídeos no Youtube)
- [dotenv](https://www.npmjs.com/package/dotenv) (Carrega variáveis de ambiente a partir do arquivo `.env` para o `process.env` no NodeJS)
- [uuid](https://www.npmjs.com/package/uuid) (Gera um identificador único)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#contributors)

## ➤ Contributors
	

| [<img alt="João Trepichio" src="https://avatars1.githubusercontent.com/u/11396817?s=60&v=4" width="100">](https://trepichio.github.io) |
|:--------------------------------------------------:|
| [João Trepichio](https://trepichio.github.io)    |
| [trepichio@gmail.com](mailto:trepichio@gmail.com) |
| 🚀                                               |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)](#license)

## ➤ License
	
Licensed under [ISC](https://opensource.org/licenses/ISC).