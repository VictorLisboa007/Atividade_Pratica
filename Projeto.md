# Projeto de Eventos

Este projeto é uma aplicação React que permite visualizar eventos e seus participantes. Ele inclui funcionalidades para listar eventos, visualizar participantes de um evento específico e adicionar novos participantes e eventos.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

/atividade_pratica ├── /public │ └── index.html # Arquivo HTML principal ├── /src │ ├── /API # Funções para interagir com a API simulada │ │ └── API.js # Função para buscar eventos e participantes │ ├── /components # Componentes reutilizáveis │ │ ├── EventoCard.jsx # Componente que exibe informações de um evento │ │ └── ParticipantesLista.jsx # Componente que exibe a lista de participantes ├── AddEventoForm.jsx # Componente que adiciona um evento │ │ ├── AddParticipanteForm.jsx # Componente que adiciona um participante │ │
├── /pages # Páginas da aplicação │ │ ├── EventosPage.jsx # Página que lista eventos │ │ └── ParticipantesPage.jsx # Página que lista participantes de um evento │ ├── /styles # Estilos CSS │ │ └── App.css # Estilo principal da aplicação │ │├── EventosPage.module.css # Estilo da página EventosPage │ │├── ParticipantesPage.module.css # Estilo da página ParticipantesPage │ ├── App.js # Componente principal da aplicação │ └── index.js # Ponto de entrada da aplicação ├── db.json # Banco de dados simulado em JSON ├── package.json # Configurações do projeto e dependências.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React Router**: Para gerenciamento de rotas na aplicação.
- **Bootstrap**: Para estilos responsivos e componentes prontos.
- **JSON Server**: Para simular uma API RESTful (usando o `db.json`).

#### Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/VictorLisboa007/Atividade_Pratica
   cd atividade_pratica

2. **Instale as dependências**

npm install
npm install json-server
npm start
npm run server

3. **Acesse a aplicação**

Abra seu navegador e acesse http://localhost:3000 para ver a aplicação em funcionamento.

Funcionalidades
Listar todos os eventos disponíveis.
Visualizar participantes de um evento específico.
Adicionar novos eventos.
Adicionar novos participantes a um evento.

