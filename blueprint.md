{{ template:title }}
{{ template:description }}
{{ template:toc }}

## Telegram
- [https://web.telegram.org/](https://web.telegram.org/)

### Criando o bot
- Se cadastre no Telegram (Você pode usar o cliente web, desktop ou mobile)
- Abra o aplicativo ou acesse o website
- Pesquise por @BotFather e inicie a conversa
- Envie o comanndo /newbot e execute as instruções
- Copie o token enviado pelo @BotFather (Vamos usá-lo no código)

## Dialogflow
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

## Youtube API
- [https://console.cloud.google.com/apis/](https://console.cloud.google.com/apis/)

### Obter Credenciais
- Selecione o seu projeto
- Em Library (Biblioteca) busque por Youtube Data API
- Ative a API
- Selecione Credentials (Credenciais) no painel esquerdo
- Selecione **+ CREATE CREDENTIALS**
- Gere/Copie sua Key

## Como rodar o projeto
  - Efetuar o clone do repositório em uma pasta do sistema operacional
  - Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
  - Substituir o arquivo de credenciais do bot criado pelo DialogFlow, e os valores das váriaveis BOTFATHER_TOKEN com o token obtido no Telegram e do YOUTUBE_API_TOKEN no arquivo **.env**
  - Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código

## Bibliotecas utilizadas no projeto
- [dialogflow](https://www.npmjs.com/package/dialogflow) (Comunicação com o Dialogflow)
- [node-telegram-bot-api](https://www.npmjs.com/package/node-telegram-bot-api) (Comunicação com o Telegram)
- [youtube-node](https://www.npmjs.com/package/youtube-node) (Faz a busca de vídeos no Youtube)
- [dotenv](https://www.npmjs.com/package/dotenv) (Carrega variáveis de ambiente a partir do arquivo `.env` para o `process.env` no NodeJS)
- [uuid](https://www.npmjs.com/package/uuid) (Gera um identificador único)

{{ template:contributors }}
{{ template:license }}