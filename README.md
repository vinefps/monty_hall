# Monty Hall Problem - Next.js Implementation

Este projeto é uma simulação interativa do problema de Monty Hall usando Next.js e React. Ele permite que os usuários ajustem o número de portas e presentes, e joguem o jogo para descobrir a localização dos presentes. O objetivo é proporcionar uma interface intuitiva e educacional para entender o famoso problema estatístico.

# Funcionalidades

Ajuste dinâmico do número de portas e presentes.

Simulação do problema de Monty Hall.

Interface intuitiva com feedback visual.

Instalação
1 - Clone o repositório:

git clone <url-do-repositorio>
cd <diretorio-do-repositorio>

2 - Instale as dependências:
npm install

3 - Execute o servidor de desenvolvimento:
npm run dev

4 - Acesse:
Abra o navegador e vá para http://localhost:3000.

# Componentes
Home
Componente principal onde o usuário define o número de portas e presentes e inicia o jogo.

Game
Componente que renderiza a interface do jogo, exibindo as portas e gerenciando a lógica do jogo.

Porta
Componente que representa uma porta no jogo, gerenciando seu estado de abertura e se contém um presente.

# Contexts
doorProvider
Gerencia o estado do número de portas.

giftProvider
Gerencia o estado do número de presentes.

# Dependências
React (v18): Uma biblioteca JavaScript para construir interfaces de usuário.

Next.js (v14.2.5): Um framework React que permite várias funcionalidades extras, incluindo renderização no lado do servidor e geração de sites estáticos.

TailwindCSS (v3.4.1): Um framework CSS baseado em utilitários para desenvolvimento rápido de UI.

TypeScript (v5): Uma linguagem de programação fortemente tipada que se baseia no JavaScript, oferecendo melhores ferramentas em qualquer escala.

# Dependências de Desenvolvimento
eslint (v8): Uma ferramenta configurável para identificar e relatar padrões em JavaScript.

eslint-config-next (v14.2.5): Configuração do ESLint para Next.js.

postcss (v8): Uma ferramenta para transformar CSS com JavaScript.

@types/node (v20): Definições TypeScript para Node.js.

@types/react (v18): Definições TypeScript para React.

@types/react-dom (v18): Definições TypeScript para React DOM.
