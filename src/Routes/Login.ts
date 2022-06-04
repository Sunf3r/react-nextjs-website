import type { Ctx } from "../../index.d.ts"
import route from "../Components/Routes.ts";

export default class Login extends route {
    paths = ['/login'];

    async exec(ctx: Ctx): Promise<string> {
        

        return 'bah';
    }
}