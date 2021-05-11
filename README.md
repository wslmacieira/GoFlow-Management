<h1  align="center">GoFlow Management</h1>

<p  align="center">
<a  href="#-como-executar">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-tecnologias">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-projeto">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a  href="#-licença">License</a>
</p>

<br>

## 🚀 How to run

- Clone this repo

- Install server dependencies in root project run comand `yarn install` or `npm install`

- Install client dependencies cd client  and run comand `yarn install` or `npm install`

- Start the server and client with `yarn dev` or `npm run dev`

- You can access the server typing [`localhost:3333`](http://localhost:3333) on your favorite browser.

- You can access the app typing [`localhost:3000`](http://localhost:3000) on your favorite browser.

- You can access the swagger docs typing [`localhost:3333/api-docs`](http://localhost:3333/api-docs) on your favorite browser.

## ✨ Technologies

This project was developed using the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [PostgresSQL](https://www.postgresql.org/)

- [Express](https://expressjs.com/)

- [TypeORM](https://typeorm.io/#/)

- [SQL Editor Beekeeper Studio](https://www.beekeeperstudio.io/)

## 💻 Project

O GoFlow Managementoffers a system for registering shippers, carriers, offers and bids.

This project was developed during a test for a fullstack developer position

## Routes

| route                  | HTTP Method |           params           |     description      |
| :--------------------- | :---------: | :------------------------: | :------------------: |
| `/embarcadores`        |     GET     | no params of the shippers. | Return the shippers. |
| `/embarcadores`        |    POST     |  Body with shippers data.  | Create new shippers. |
| `/embarcadores/import` |    POST     |    Body with file csv.     | Create new shippers. |
| `/transportadoras`     |     GET     | no params of the shippers. | Return the carriers. |
| `/transportadoras`     |    POST     |  Body with carriers data.  | Create new carriers. |
| `/ofertas`             |     GET     | no params of the shippers. | Return the offers .  |
| `/ofertas`             |    POST     |   Body with offers data.   | Create new offers .  |
| `/lances`              |     GET     | no params of the shippers. |   Return the bids.   |
| `/lances`              |    POST     |    Body with bidsdata.     |   Create new bids.   |

## 📄 License

This project is under the MIT [LICENSE](LICENSE.md)
