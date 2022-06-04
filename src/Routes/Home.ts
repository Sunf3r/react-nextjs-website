import type { Ctx } from "../../index.d.ts"
import route from "../Components/Routes.ts";

export default class Home extends route {
    paths = ['/home', '/'];

    async exec(ctx: Ctx): Promise<string> {
        let url = ctx.path === '/' ? 'home' : ctx.path.replace('/', '');

        return ctx.app.pages.get(url)!;
    }
}