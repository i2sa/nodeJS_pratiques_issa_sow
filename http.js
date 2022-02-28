const http = require("http");
const { readFileSync } = require("fs");
const server = http.createServer((req, res) => {
  const home = readFileSync("./frontend/home.html");
  const style = readFileSync("./frontend/css/style.css");
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(home);
    return res.end();
  }
  if (req.url === "/css/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    return res.end();
  }
  if (req.url === "/about") {
    return res.end("a propos de moi");
  }

  return res.end("page not found");
});
server.listen(1994);
