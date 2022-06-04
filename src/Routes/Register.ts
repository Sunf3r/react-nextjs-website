import type { Ctx } from "../../index.d.ts"
import route from "../Components/Routes.ts";

export default class Register extends route {
    paths = ['/register/:email/:password'];
    // :email e :password são os parâmetros do request
    method = 'post';
    hasHtml = false;

    async exec(ctx: Ctx): Promise<string> {
       

        return '';
    }
}