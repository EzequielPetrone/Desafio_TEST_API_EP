const routingError = (req, res) => res.status(404).send(`Fail Request ${req.method} a la ruta: ${req.originalUrl} (No implementada)`)

export { routingError }