# Next Level Week - Ecoleta
#### Next Level Week - Semana de desenvolvimento com Node, React e React Native

* Desenvolvimento de um aplicativo de coleta de resíduos que não podem ser descartados normalmente em lixos comuns.
### Página WEB do Ecoleta
* Página principal
![](/readme-img/home-screen.png)
* Página de cadastro
![](/readme-img/cadastro-screen.png)
### Aplicativo do Ecoleta
<p align="center">
  <img src="/readme-img/home-page-app.jpg" height="720" width="320" >
  <img src="/readme-img/no-selected-points-page-app.jpg" height="720" width="320" >
  <img src="/readme-img/selected-points-page-app.jpg" height="720" width="320" >
  <img src="/readme-img/detail-page-app.jpg" height="720" width="320" >
  
### Instalações necessárias
* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [Expo](https://expo.io/learn)
* [Expo para Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
* [Expo para IOs](https://apps.apple.com/br/app/expo-client/id982107779)

### Como rodar o servidor para o uso do banco de dados?
1. Entrar no seu terminal;
2. Navegar até a pasta /server;
3. Rodar o comando:
> yarn dev
4. O servidor estará rodando no endereço http://localhost:3333.

### Como rodar a página web?
1. Entrar no seu terminal;
2. Navegar até a pasta /web;
3. Rodar o comando:
> npm start
4. Uma página web no endereço http://localhost:3000 irá iniciar.

#### Observação:
Para o aplicativo carregar os dados do servidor, será necessário fazer uma mudança em uma linha de código
no arquivo /home/davilnv/Documentos/nextlevelweek/mobile/src/services/api.ts
```
const api = axios.create({
    baseURL: 'http://localhost:3333'
    // Trocar localhost pelo IP da sua máquina, pode ser encontrado na página em que o expo está rodando;
    // Exemplo: 
    // baseURL: 'http://192.168.0.1:3333'
});
```
### Como rodar o aplicativo no smartphone?
1. Entrar no seu terminal;
2. Navegar até a pasta /mobile;
3. Rodar o comando:
> npm start
4. Uma página web no endereço http://localhost irá iniciar com algumas informações e um QR Code;
5. No seu smartphone abra o aplicativo do expo, escaneie o QR Code e aguarde o aplicativo carregar;
6. Pronto o App estará funcionando.

#### Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
- Expo
- Node
- Ract
- React Native
