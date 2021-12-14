import {createServer, IncomingMessage, ServerResponse} from 'http';

const HOSTNAME = '0.0.0.0';
const PORT = parseInt(process.env.PORT || '3000');

const server = createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    if (request.url?.includes('favicon.ico')) return;
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.end(
      '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="background-color:DimGray;"><p>&#128152;</p></body></html>'
    );
  }
);

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
