import express from 'express'; //importo express
import { appErrorHandler } from './src/middlewares/appErrorHandler.js' // importo error Handler para la Express App
import RouterProductos from './src/routes/RouterProductos.js'; //Importo class RouterProductos from Routes
import { warnLogger } from './src/middlewares/logging.js' // importo middleware para logueo de warns
import { routingError } from './src/controllers/routingError.js' //importo function específica para manejar rutas no parametrizadas
import { PORT } from './src/config/config.js' //Importo variables de config
import logger from './src/utils/logger.js' //Importo logger que configuré

const app = express(); //Seteo Express app

app.disable('x-powered-by'); // un pequeño seteo de seguridad

app.use(appErrorHandler) //Seteo Middleware de manejo de errores

app.use(express.static('public')); //Seteo 'public' como static

//Seteo Router de la Api de Productos
const routerProductos = new RouterProductos() 
app.use('/api/productos', routerProductos.start()) 

app.use('*', warnLogger, routingError); //Gestiono rutas no parametrizadas

//Pongo a escuchar al server
const server = app.listen(PORT, err => {
    if (!err) {
        logger.info(`Server running at PORT: ${server.address().port}`)
    }
});

//Server Error logging
server.on("error", error => logger.error('Error en el servidor: ' + error))