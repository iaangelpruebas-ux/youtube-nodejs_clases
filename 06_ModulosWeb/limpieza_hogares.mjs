import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 1. Truco para recuperar "__dirname" en archivos .mjs (no existe por defecto)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  
  // 2. Buscamos el archivo index.html
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Error: No se encontro el archivo index.html");
    } else {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(content);
    }
  });
});

const PORT = 3000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`✨ Servidor listo en http://127.0.0.1:${PORT}`);
});