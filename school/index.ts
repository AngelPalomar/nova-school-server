import * as mongoose from "mongoose";
import routeHandler from "./src/routes/RoleRoutes";

const port = process.env.PORT;
const host = process.env.HOST;
const db_url = process.env.DB_URL;
const enviroment = process.env.NODE_ENV;

const server = Bun.serve({
  development: false,
  port: port,
  async fetch(req) {
    const { method, url } = req;
    const { pathname } = new URL(url);
    const handlers = routeHandler(req);

    await mongoose.connect(db_url ?? '');
    return new Response("");
  }
});

console.log(`
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

NOVA DIDACTA PROJECT:      School API 1.0.0
Enviroment:                ${enviroment}
Listening:                 http://${host}:${server.port}
MongoDB URL:               ${db_url}

■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
`);