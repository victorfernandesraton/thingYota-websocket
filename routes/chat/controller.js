const
  fs = require('fs'),
  path = require("path");

module.exports = (server) => {
  // handle chat html page
  server.get('/chat', function indexHTML(req, res, next) {
    fs.readFile(path.resolve('pages', 'index.html'), (err, data) => {
      if (err) {
        next(err);
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(data);
      next();
    });
  });
}