// dedico este arquivo para importar todos os módulos na nuvem
// e exporta-los com nomes mais agradáveis. Convenhamos
// não seria legal repetir urls de repositórios em todo arquivo

import { Application, Context } from "https://deno.land/x/abc@v1.3.3/mod.ts";
import { moment } from "https://deno.land/x/deno_moment@v1.1.2/mod.ts";

export { Application, Context, moment };