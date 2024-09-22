function eliminarScripts(html) {
    return html.replace(/<script\b[^<](?:(?!<\/script>)<[^<])*<\/script>/gi, '');
}

// Ejemplo de uso
const htmlConScripts = `
    <html>
        <head>
            <script>alert('Hola');</script>
        </head>
        <body>
            <h1>Hola Mundo</h1>
            <script>console.log('Este es un script');</script>
            <p>Este es un párrafo.</p>
        </body>
    </html>
`;

const resultado = eliminarScripts(htmlConScripts);
console.log(resultado);