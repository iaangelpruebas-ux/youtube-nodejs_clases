// 1. Ya no necesitas importar 'parse'

const urlString = "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";

// 2. Usamos la clase global 'URL'
const myUrl = new URL(urlString);

console.log("Protocolo:", myUrl.protocol);
console.log("Hostname:", myUrl.hostname);
console.log("Pathname:", myUrl.pathname);

// 3. OJO AQUÍ: 'query' ya no existe igual.
// Ahora se usa 'searchParams'.
// Para verlo como un objeto simple (igual que antes), usamos Object.fromEntries:
console.log("Parámetros de consulta:", Object.fromEntries(myUrl.searchParams));