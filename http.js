const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("bienvenue dans le site de issa");
  }
  if (req.url === "/about") {
    return res.end("a propos de moi");
  }

  return res.end("page not found");
});
server.listen(1994);
