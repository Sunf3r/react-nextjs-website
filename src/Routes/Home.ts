import type { Ctx } from "../../index.d.ts"
import route from "../Components/Routes.ts";

export default class Home extends route {
    paths = ['/home', '/'];
    method = 'file';

    async exec(ctx: Ctx): Promise<string> {
        return '';
    }
}