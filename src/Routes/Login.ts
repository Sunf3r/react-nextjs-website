import type { Ctx } from "../../index.d.ts"
import route from "../Components/Routes.ts";

export default class Login extends route {
    paths = ['/login/:email/:password'];
    method = 'get';

    async exec(ctx: Ctx): Promise<string> {
        

        return '';
    }
}