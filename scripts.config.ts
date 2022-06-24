// arquivo de configuração de scrips do deno
import { DenonConfig } from 'https://deno.land/x/denon@2.5.0/mod.ts';

const config: DenonConfig = {
    watch: false,
    // o modo watch só deve ser ativado no 
    // ambiente de desenvovimento
    watcher: {
        interval: 250, // 250ms
        exts: ['ts', 'json', 'html', "d.ts"], // extensões de arquivos a serem assistidas
        match: ['**/*.*'],
        skip: ['git/', '.vscode/'], // ignorar essas pastas
        legacy: false,
    },
    logger: {
        fullscreen: false,
        quiet: true,
        debug: false,
    },
    scripts: {
        start: {
            cmd: 'deno run src/Main.ts',
            desc: 'Start application',
            watch: false,
            allow: {
                all: true
            }
        },
        dev: {
            cmd: 'deno run src/Main.ts',
            desc: 'Start application in development mode',
            watch: true,
            allow: {
                all: true
            }
        }
    }
};

export default config;