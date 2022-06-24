console.clear();
import { loadRoutes } from "./Components/Routes.ts";
import { Application } from "./libraries.ts";
import { App } from "../index.d.ts";
import ProtoTypes from "./Components/ProtoTypes.ts";

await ProtoTypes(); // configurando prototypes...
const app = new Application() as App;
app.pages = new Map();

// adicionando rotas ao pai App
await loadRoutes('./src/Routes', app);

app.start({
    hostname: 'localhost',
    port: 80
});

console.log("SERVER", `Servidor iniciado!`, 5);