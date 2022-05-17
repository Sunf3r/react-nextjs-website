console.clear();
import { Application } from "./libraries.ts";
import { App } from "../index.d.ts";
import ProtoTypes from "./Components/ProtoTypes.ts";

await ProtoTypes();
console.log("APP", "ProtoTypes configurados", 9);

const app = new Application() as App;
app.pages = new Map();

loadRoutes('./src/Routes');

app.start({
    hostname: 'localhost',
    port: 1999
});
console.log("SERVER", `Servidor iniciado!`, 5);

async function loadRoutes(path: string) {
    let routes = Deno.readDirSync(path);

    for (const r of routes) {
        if (r.isDirectory) continue;

        let { method, paths, exec } = new (await import(`./Routes/${r.name}`)).default(app),
            page = await Deno.readTextFile(`./src/Pages/${r.name.split('.')[0]}.html`);

        r.name = r.name.split('.')[0].toLowerCase();

        for (const p of paths)
            app[method as 'get'](p, exec);

        app.pages.set(r.name, page);

        console.log('ROUTES', `Rota ${r.name} aberta`, 2);
    }
}