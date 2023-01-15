const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.write('Welcome home');
    res.end();
  } else if (req.url === '/about') {
    res.write('Welcome to About Us page');
    res.end();
  } else if (req.url === '/node') {
    res.write('Welcome to my Node Js project');
    res.end();
  } else {
    res.write('404 Not Found');
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
