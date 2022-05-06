import ExpressHttp from "./main/adapters/ExpressHttp";
import HapiHttp from "./main/adapters/HapiHttp";
import Http from "./presentation/contracts/Http";
import App from "./main/config/app";
import { env } from "./main/config/env";

const PORT: number = +env.port;
const http: Http = new ExpressHttp();
const app: App = new App(http);
app.startServer(PORT);