import 'dotenv/config' // Para poder usar las variables de entorno directamente.

// Importo y utilizo YARGS
import yargsF from 'yargs/yargs';
const yargs = yargsF(process.argv.slice(2))
const argv = yargs.alias({ p: "port", t: "type" }).default({ p: 8080, t: 'MONGO' }).argv;

const MONGO_URL = process.env.MONGO_URL || ''

const PORT = process.env.PORT || parseInt(argv.port)

const TIPO_PERSISTENCIA = process.env.TIPO_PERSISTENCIA || argv.type

export { MONGO_URL, PORT, TIPO_PERSISTENCIA }