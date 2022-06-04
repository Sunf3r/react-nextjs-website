import { Application, Context } from "./src/libraries.ts";

interface App extends Application {
    pages: Map<string, string>;
}

interface Ctx extends Context {
    app: App;
}

interface Route {
    paths: string[];
    method: string;
    hasHtml?: boolean;
    disabled?: boolean;
}

declare global {
    interface String {
        toPascalCase(): string;
    }
}