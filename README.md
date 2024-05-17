<div align="center">
    <h1>
        Meu Portfólio 
    </h1>
</div>

### 🛠 Ferramentas Utilizadas
<div>
  <img width="50px" style="margin:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  <img width="50px" style="margin:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img width="50px" style="margin:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
  <img width="50px" style="margin:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
  <img width="50px" style="margin:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img width="50px" style="margin:10px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg" />


</div>

### ⚙ Configurações:
##### ➡ Lite-Server
O método de instalação recomendado é uma instalação NPM local para seu projeto:

    npm install lite-server --save-dev
    yarn add lite-server --dev # or yarn 

... e adicione uma entrada de "script" dentro do arquivo do seu projeto:``package.json``

    Inside package.json...
    "scripts": {
        "dev": "lite-server"
    },
Com a entrada de script acima, você pode começar através de:lite-server

    npm run dev

##### ➡ TypeScript <img width="20px" style="vertical-align: bottom" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> 

###### Instalando apenas no projeto

Você precisará de uma cópia do Node.js como um ambiente para executar o pacote. Em seguida, você usa um gerenciador de dependências como `npm`, ``yarn`` ou ``pnpm`` para baixar o TypeScript em seu projeto.

    npm install typescript --save-dev

Todos esses gerenciadores de dependência oferecem suporte a arquivos de bloqueio, garantindo que todos em sua equipe estejam usando a mesma versão do idioma. Em seguida, você pode executar o compilador TypeScript usando um dos seguintes comandos:

    npx tsc

###### Instalando globalmente (opcional)
via npm
Você pode usar o npm para instalar o TypeScript globalmente, isso significa que você pode usar o comando em qualquer lugar do seu terminal.``tsc``

Para fazer isso, execute o comando. Isso instalará a versão mais recente (atualmente 5.3). ``npm install -g typescript``

##### Configurando

###### Adicionar no arquivo ``tsconfig.json`` :

Dentro do diretório raiz do projeto, crie um arquivo chamado ``tsconfig.json``. Ele é a fonte de verdade para a configuração de como queremos que o TypeScript se comporte em relação a nosso projeto. Ele nos permite ligar e desligar funcionalidades. Vamos começar com algumas poucas configurações:

    {
        "compilerOptions": {
            "target": "es6", (converter os arquivos TS em ECMASCRIPT 6)
            "module": "commonjs",
            "rootDir": "./",
            "outDir": "./"
            "noEmitOnError": true, (não gerará arquivo js com erro)
            "strictNullChecks": true, (precisa especificar se as propriedades podem receber valor nulo)
            "experimentalDecorators": true (ativar decorators)
        },
        "include":["app/**/*"] (pasta de origem da conversão)
    }

- ``"target": "es6"``: Define a versão do ECMAScript que o código compilado vai seguir. Escolhemos "es5" por ser amplamente suportado.

- ``"module": "commonjs"``: Especifica o sistema de módulos que será usado. "commonjs" é uma escolha segura para projetos Node.js.

- ``"rootDir": "./"``: Indica o diretório onde estão nossos arquivos TypeScript.

- ``"outDir": "./"``: Especifica o diretório onde o TypeScript vai colocar os arquivos JavaScript compilados.

###### Adicionar no arquivo ``package.json`` :

    {
        "name": "Portfólio WagProjects",
        "version": "1.0.0",
        "description": "Meu portfólio de projetos",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "server": "lite-server --baseDir=app/dist",
            "start": "concurrently \"npm run watch\" \"npm run server\"",
            "compile": "tsc",
            "watch": "tsc -w"
        },
        "author": "Wagner Oliveira",
        "license": "ISC",
        "devDependencies": {
            "concurrently": "^6.0.0",
            "lite-server": "^2.6.1",
            "typescript": "^4.2.2"
        }
    }

- ``"compile": "tsc"`` : Transforma arquivos ts em js | comando: ``npm run compile``
- ``"watch": "tsc -w"`` : monitorar os arquivos das pastas que foram inseridos no include e atualizar automaticamente | comando: ``npm run watch``
- command: ``npm run start`` : executa os comandos ``npm run watch`` e ``npm run compile``


Documentação Utilizada: 
- [Documentação TypeScript](https://www.typescriptlang.org/download)
- [Artigo TypeScript Alura](https://www.alura.com.br/artigos/typescript-javascript-vanilla?_gl=1*s0it44*_ga*NjE2NjAzNDM2LjE2ODAyODk1MzI.*_ga_1EPWSW3PCS*MTcwNjcxMDc0Ni4zMzQuMS4xNzA2NzEwNzYxLjAuMC4w*_fplc*alY1YXBpQ0NzY2slMkZMdTBGcXNJbHY2dHg3ODJtN2RoOXREY01helZKOTRxJTJCOGJnaHBqTk04eFElMkY5Z0VzT2pvRHl4Qk0lMkZZdGZKY3hJU1NRTXJlY0lGdlNwRGVMclFNZUNtbXgyQ1ZDOCUyRnpKSk1mU2NJR1klMkIzbWRrQ1JzcTN3JTNEJTNE)
- [Lite Server](https://www.npmjs.com/package/lite-server)
- [SwiperJS](https://swiperjs.com/)

### 💞 Inspiração: 
- [Genshin Impact](https://genshin.hoyoverse.com/pt/home)
