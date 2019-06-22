var http = require('http');
var fs = require('fs');

const PORT = 11022;

const serveRes = function (req, res, prefixes) {
    if (prefixes.some(function (prefix) { return req.url.indexOf(prefix) !== -1; })) {
        const css = fs.createReadStream(__dirname + req.url);
        css.pipe(res);
        return true;
    }
    return false;
};

fs.readFile('./index.html', function (err, html) {
    if (err) throw err;

    http.createServer(function (request, response) {
        if (!serveRes(request, response, ["css", "woff", "ttf", "js"])) {
            response.writeHeader(200, { "Content-Type": "text/html" });
            response.write(html);
            response.end();
        }
    }).listen(PORT);
});