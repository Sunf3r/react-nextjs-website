import type { App, Route, RouteMethods } from "../../index.d.ts";

export default abstract class route implements Route {
    paths!: string[];
    // esse ! no final do nome indica
    // que este parâmetro é obrigatório em todas as rotas
    method!: string;
    // aqui escrevemos os métodos em minúsculo
    // isso é necessário para funcionar corretamente

    // constructor(public db: Database) {
    // Database ainda não estabelecida
    // this.db = db;
    // }

    abstract exec(...args: any): Promise<string>;
    // função principal da rota
}

export async function loadRoutes(path: string, app: App) {
    let routes = Deno.readDirSync(path);
    // routes = lista de arquivos dentro do dir

    for (const r of routes) {
        if (r.isDirectory) continue;

        try {
            r.name = r.name.split('.')[0];
            const { method, paths, type, exec } = new (await import(`../Routes/${r.name}.ts`))
                .default(app);
            // importando a classe do módulo

            // criando rotas no server
            for (const p of paths) {
                if (method === 'file') app.file(p, `./src/Pages/${r.name}.html`);
                else app[!method ? 'get' : method as RouteMethods](p, exec);
            }

            if (!type) {
                // nem toda rota retornará um arquivo html
                // o type serve para nos dizer isso
                // que fofoqueiro, fica aí falando da vida dos outros
                const page = await Deno.readTextFile(`./src/Pages/${r.name}.html`);
                // salvar os htmls em cache é útil para recarregar rapidamente
                // as páginas
                app.pages.set(r.name.toLowerCase(), page);
            }

            console.log(`ROUTER`, `Rota ${r.name} aberta`, 2);
        } catch (e) {
            console.error(e, `ROUTER / ${r.name}`);
        }
    }
}