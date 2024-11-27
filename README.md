# Projeto Imersão Back-end

## Descrição

Este projeto foi desenvolvido durante a Imersão Back-end da Alura e explora o desenvolvimento de APIs com Node.js, MongoDB e integração com serviços externos, como o Google Generative AI. A aplicação permite criar, consultar e atualizar posts com upload de imagens, gerando descrições automáticas com o Gemini.


## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Multer (Upload de arquivos)
- Google Generative AI (Gemini)
- dotenv

## Estrutura do projeto 
```plaintext
irmesao-dev-backend/
├── node_modules/       # Dependências instaladas via npm.
├── src/                # Código-fonte principal.
│   ├── config/         # Configuração da aplicação.
│   │   └── dbConfig.js # Conexão com o MongoDB.
│   ├── controller/     # Controladores (lógica das rotas).
│   │   └── postsController.js
│   ├── models/         # Modelos para interação com o banco de dados.
│   │   └── postModels.js
│   ├── routes/         # Definição das rotas.
│   │   └── postsRoutes.js
│   ├── services/       # Integração com serviços externos.
│   │   └── geminiServices.js
├── uploads/            # Diretório para imagens enviadas.
├── .env                # Configuração de variáveis de ambiente.
├── .gitignore          # Arquivos/pastas ignorados pelo Git.
├── package-lock.json   # Controle de versões das dependências.
├── package.json        # Configurações do projeto e scripts npm.
├── server.js           # Arquivo principal do servidor.
├── README.md           # Documentação do projeto.

```
## Configuração do Ambiente

### Pré-requisitos
- Node.js (v16 ou superior)
- MongoDB (Atlas ou local)

### Variáveis de Ambiente
Crie um arquivo .env no diretório raiz com o seguinte conteúdo:

```env
STRING_CONNECTION=<sua-string-de-conexao-do-mongodb>
GEMINI_API_KEY=<sua-chave-da-api-do-google-generative-ai>
```

## Funcionalidades

- CRUD de posts: Criação, leitura e atualização.
- Upload de imagens: Armazenamento local no servidor.
- Integração com Gemini: Geração automática de descrições de imagens.
- Testes com Postman/ThunderClient: Testar endpoints.