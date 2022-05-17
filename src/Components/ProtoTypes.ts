import { moment } from 'https://deno.land/x/deno_moment@v1.1.2/mod.ts';

export default async function () {
    { // console.log
        moment.locale('pt'); // definindo o idioma da formatação de datas

        let colors = { // números das cores
            1: 'white',
            2: 'grey',
            3: 'black',
            4: 'red',
            5: 'green',
            6: 'yellow',
            7: 'blue',
            8: 'purple',
            9: 'cyan'
        }

        console.log = function () {
            let args = [...arguments]; // 'arguments' está presente em toda function normal 
            // e representa todos os parâmetros passados na função

            if (args[2] && typeof args[args.length - 1] === 'number' && args[0] === args[0].toUpperCase()) {
                let color = args.pop(), // color = args.last()
                    str = `%c[ ${args.shift()} | ${moment(Date.now()).format('HH:mm')}/${Math.floor(Deno.memoryUsage().rss / 1024 / 1024)}MB ] - ${args.join(' ')}`;

                //@ts-ignore
                console.info(str, `color: ${colors[color]}`);
                // console.info = aliase de console.log
            } else console.info(...arguments);

            return;
        }
    }

    {

    }
}