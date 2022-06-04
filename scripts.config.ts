import { DenonConfig } from 'https://deno.land/x/denon@2.5.0/mod.ts';

const config: DenonConfig = {
    watch: false,
    watcher: {
        interval: 250,
        exts: ['ts', 'json', 'html', "d.ts"],
        match: ['**/*.*'],
        skip: ['git/', '.vscode/'],
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
                read: true,
                net: true
            }
        },
        dev: {
            cmd: 'deno run src/Main.ts',
            desc: 'Start application in development mode',
            watch: true,
            allow: {
                read: true,
                net: true
            }
        }
    }
};

export default config;