const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
    // Get the requested file path
    let filePath = path.join(PUBLIC_DIRECTORY, req.url === '/' ? 'index.html' : req.url);

    // Get the file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found
                // fs.readFile(path.join(PUBLIC_DIRECTORY, '404.html'), (err404, content404) => {
                //     if (err404) {
                //         res.writeHead(404, { 'Content-Type': 'text/html' });
                //         res.end('<h1>404 Not Found</h1><p>The requested resource could not be found.</p>', 'utf-8');
                //     } else {
                //         res.writeHead(404, { 'Content-Type': 'text/html' });
                //         res.end(content404, 'utf-8');
                //     }
                // });
            } else {
                // Some other server error
                res.writeHead(500);
                res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
            }
        } else {
            // File found, serve it
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});