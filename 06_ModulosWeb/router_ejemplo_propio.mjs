import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuración de rutas de archivos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  
  // RUTA 1: La página principal (Home)
  // Nota: Cambié esto para que cargue index.html en la raíz "/" en lugar de "/kenai"
  // para que se vea más profesional.
  if (req.url === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Error: No se encontro index.html");
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(content);
      }
    });
  } 
  
  // RUTA 2: La página de mensaje bonito
  else if (req.url === "/cotizacion") {
    const filePath = path.join(__dirname, "cotizacion.html");
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Error: No se encontro cotizacion.html");
      } else {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(content);
      }
    });
  } 
  
  // RUTA 3: Error 404 (Cualquier otra cosa)
  else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 - ¡Página no encontrada 😔!</h1><a href='/'>Volver al inicio</a>");
  }
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`✨ Servidor listo en http://127.0.0.1:${PORT}`);
  console.log(`   Prueba el botón de cotizar!`);
});