const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const REMOTE_ORIGIN = 'https://mx-icons.vercel.app';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

function fetchRemote(urlPath) {
  return new Promise((resolve, reject) => {
    const targetUrl = `${REMOTE_ORIGIN}${urlPath}`;
    https.get(targetUrl, (res) => {
      if (res.statusCode !== 200) {
        resolve({ status: res.statusCode, data: null });
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ status: 200, data: Buffer.concat(chunks) }));
    }).on('error', err => reject(err));
  });
}

const server = http.createServer(async (req, res) => {
  // CORS & caching headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Default to index.html for root
  if (pathname === '/') {
    pathname = '/index.html';
  }

  let filePath = path.join(ROOT_DIR, pathname);

  // Fallback for svg logo requests to ensure logo always displays
  if (pathname === '/tsex-icons.svg' || pathname === '/mx-icons.svg' || pathname === '/assets/tsex-icons.svg' || pathname === '/assets/mx-icons.svg') {
    const pngPath = path.join(ROOT_DIR, 'tsex-icons.png');
    res.writeHead(200, { 'Content-Type': 'image/png' });
    fs.createReadStream(pngPath).pipe(res);
    return;
  }

  // Check if file exists locally
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  // If request is for an asset under /assets/ that is not cached locally, proxy-fetch and cache it
  if (pathname.startsWith('/assets/')) {
    console.log(`[Proxy Fetch] Fetching missing asset: ${pathname}`);
    try {
      const remote = await fetchRemote(pathname);
      if (remote.status === 200 && remote.data) {
        // Save to local cache
        const localDest = path.join(ROOT_DIR, pathname);
        const dir = path.dirname(localDest);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(localDest, remote.data);
        console.log(`[Cached] Successfully cached: ${pathname}`);

        const ext = path.extname(pathname).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/javascript; charset=utf-8';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(remote.data);
        return;
      }
    } catch (err) {
      console.error(`[Proxy Error] Error fetching ${pathname}:`, err.message);
    }
  }

  // SPA fallback: If requesting a page without an extension (like /installation), serve index.html
  const hasExt = path.extname(pathname) !== '';
  if (!hasExt) {
    const indexPath = path.join(ROOT_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(indexPath).pipe(res);
      return;
    }
  }

  // 404 Not Found
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
});

server.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` TseX Icons Local Preview Server Running!`);
  console.log(` Local:   http://localhost:${PORT}`);
  console.log(` Network: http://127.0.0.1:${PORT}`);
  console.log(` Root:    ${ROOT_DIR}`);
  console.log(`====================================================`);
});
