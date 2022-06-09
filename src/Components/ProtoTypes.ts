import { moment } from "../libraries.ts";

export default async function () {
    //      console.log()
    {
        // eu tenho uma paixão incontrolável por deixar o console bonitinho
        // e essa função vai garantir q ele fique colorido mais fácil
        // graças ~a Deus~ ao Deno, da pra fazer isso sem precisar de nenhum outro módulo
        // cofcof chupa nodejs
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
            let a = [...arguments];
            // 'arguments' está presente em toda function normal 
            // e representa todos os parâmetros passados na função

            if (a[2] && typeof a[a.length - 1] === 'number' && a[0].split('/')[0] === a[0].split('/')[0].toUpperCase()) {
                let color = a.pop(), // color = arguments.last()
                    str = `%c[ ${a.shift()} | ${moment(Date.now()).format('HH:mm')}/${Math.floor(Deno.memoryUsage().rss / 1024 / 1024)}MB ] - ${a.join(' ')}`;

                //@ts-ignore  ||  console.info = aliase de console.log
                console.info(str, `color: ${colors[color]}`);
            } else console.info(...arguments);

            return;
        }
    }

    //      console.error
    {
        // maneira mais simples e prática de criar bons logs de erros
        console.error = function () {
            let a = [...arguments];
            return console.log(a[1] ? a[1] : 'ERROR', String(a[0].stack ? a[0].stack : a[0]).slice(0, 512), 4);
        }

    }

    //      String.toPascalCase()
    {
        // 'hery'.toPascalCase() === 'Hery'
        Object.defineProperty(String.prototype, 'toPascalCase', {
            value: function () {
                return String(this).slice(0, 1).toUpperCase() + String(this).slice(1).toLowerCase();
            }
        })

    }

    console.log("SERVER", "Prototypes configurados", 9);
}