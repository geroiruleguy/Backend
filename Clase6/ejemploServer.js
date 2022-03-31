const http = require('http')// → Paso inicial

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Hola mundo')
}) //→ Esta funcionalidad lo que hace es crear el servidor.

const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
}) // → Esta funcionalidad conecta el servidor.
