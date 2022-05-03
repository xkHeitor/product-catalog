import ExpressHttp from "./main/adapters/ExpressHttp";
import Http from "./presentation/contracts/Http";
import App from "./main/config/app";
import { env } from "./main/config/env";
import HapiHttp from "./main/adapters/HapiHttp";

const PORT: number = +env.port;
const http: Http = new ExpressHttp();
const app = new App(http);
app.startServer(PORT);